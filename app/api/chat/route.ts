import { NextRequest } from 'next/server';

// Message type for chat history
interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

// Request body type
interface ChatRequest {
    message: string;
    history?: ChatMessage[];
}

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body: ChatRequest = await request.json();
        const { message, history = [] } = body;

        // Validate message
        if (!message || typeof message !== 'string' || !message.trim()) {
            return new Response(
                JSON.stringify({ error: '消息不能为空' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Check API key and bot ID
        const apiKey = process.env.COZE_API_KEY;
        const botId = process.env.COZE_BOT_ID;

        if (!apiKey || !botId) {
            console.error('COZE_API_KEY or COZE_BOT_ID is not configured');
            return new Response(
                JSON.stringify({ error: 'AI 服务暂时不可用' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Convert history to Coze format (last 10 messages)
        const additionalMessages = history.slice(-10).map((msg) => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.text,
            content_type: 'text',
        }));

        // Add current message
        additionalMessages.push({
            role: 'user',
            content: message,
            content_type: 'text',
        });

        // Call Coze API with streaming mode
        const cozeResponse = await fetch('https://api.coze.cn/v3/chat', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bot_id: botId,
                user_id: 'anonymous_visitor',
                stream: true,  // Enable streaming
                additional_messages: additionalMessages,
            }),
        });

        if (!cozeResponse.ok) {
            console.error('Coze API error:', cozeResponse.status, cozeResponse.statusText);
            return new Response(
                JSON.stringify({ error: 'AI 响应失败，请稍后重试' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Create a TransformStream to process SSE events
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();

        const stream = new ReadableStream({
            async start(controller) {
                const reader = cozeResponse.body?.getReader();
                if (!reader) {
                    controller.enqueue(encoder.encode('data: {"error": "无法读取响应"}\n\n'));
                    controller.close();
                    return;
                }

                let buffer = '';

                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        buffer += decoder.decode(value, { stream: true });

                        // Process complete SSE events (lines ending with \n\n)
                        const events = buffer.split('\n\n');
                        buffer = events.pop() || ''; // Keep incomplete event in buffer

                        for (const event of events) {
                            if (!event.trim()) continue;

                            // Parse SSE event
                            const lines = event.split('\n');
                            let eventType = '';
                            let eventData = '';

                            for (const line of lines) {
                                if (line.startsWith('event:')) {
                                    eventType = line.slice(6).trim();
                                } else if (line.startsWith('data:')) {
                                    eventData = line.slice(5).trim();
                                }
                            }

                            // Only forward conversation.message.delta events (streaming content)
                            if (eventType === 'conversation.message.delta' && eventData) {
                                try {
                                    const data = JSON.parse(eventData);
                                    // Only send answer type messages
                                    if (data.type === 'answer' && data.content) {
                                        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: data.content })}\n\n`));
                                    }
                                } catch (e) {
                                    console.error('Error parsing event data:', e);
                                }
                            } else if (eventType === 'conversation.message.completed') {
                                // Message completed, we can signal end
                                controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                            } else if (eventType === 'conversation.chat.completed') {
                                // Chat completed
                                controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                            } else if (eventType === 'error') {
                                try {
                                    const data = JSON.parse(eventData);
                                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: data.msg || 'Unknown error' })}\n\n`));
                                } catch (e) {
                                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Unknown error' })}\n\n`));
                                }
                            }
                        }
                    }

                    // Process any remaining buffer
                    if (buffer.trim()) {
                        const lines = buffer.split('\n');
                        let eventData = '';
                        let eventType = '';

                        for (const line of lines) {
                            if (line.startsWith('event:')) {
                                eventType = line.slice(6).trim();
                            } else if (line.startsWith('data:')) {
                                eventData = line.slice(5).trim();
                            }
                        }

                        if (eventType === 'conversation.message.delta' && eventData) {
                            try {
                                const data = JSON.parse(eventData);
                                if (data.type === 'answer' && data.content) {
                                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: data.content })}\n\n`));
                                }
                            } catch (e) {
                                // Ignore parse errors for incomplete data
                            }
                        }
                    }

                    controller.close();
                } catch (error) {
                    console.error('Stream processing error:', error);
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Stream processing error' })}\n\n`));
                    controller.close();
                }
            }
        });

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(
            JSON.stringify({ error: 'AI 响应失败，请稍后重试' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
