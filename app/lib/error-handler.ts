/**
 * 全局错误处理工具
 * 提供统一的错误处理和用户友好的错误消息
 */

export interface AppError {
  message: string;
  code?: string;
  details?: unknown;
  timestamp: Date;
}

export interface ErrorHandlerOptions {
  onError?: (error: AppError) => void;
  defaultMessage?: string;
  logErrors?: boolean;
}

export class ErrorHandler {
  private options: ErrorHandlerOptions;

  constructor(options: ErrorHandlerOptions = {}) {
    this.options = {
      defaultMessage: '发生未知错误，请稍后重试',
      logErrors: true,
      ...options,
    };
  }

  /**
   * 创建应用错误对象
   */
  createError(message: string, code?: string, details?: unknown): AppError {
    return {
      message,
      code,
      details,
      timestamp: new Date(),
    };
  }

  /**
   * 处理未知错误并转换为应用错误
   */
  handleError(error: unknown, context?: string): AppError {
    let appError: AppError;

    if (error instanceof Error) {
      appError = this.createError(
        error.message || this.options.defaultMessage!,
        error.name,
        { stack: error.stack, context }
      );
    } else if (typeof error === 'string') {
      appError = this.createError(error, 'STRING_ERROR', { context });
    } else {
      appError = this.createError(
        this.options.defaultMessage!,
        'UNKNOWN_ERROR',
        { originalError: error, context }
      );
    }

    // 记录错误
    if (this.options.logErrors) {
      console.error(`[ErrorHandler] ${context || 'Unknown context'}:`, appError);
    }

    // 调用自定义错误处理
    if (this.options.onError) {
      this.options.onError(appError);
    }

    return appError;
  }

  /**
   * 获取用户友好的错误消息
   */
  getUserFriendlyMessage(error: AppError): string {
    // 根据错误代码提供用户友好的消息
    const errorMessages: Record<string, string> = {
      'NETWORK_ERROR': '网络连接失败，请检查网络连接',
      'API_ERROR': '服务器响应错误，请稍后重试',
      'VALIDATION_ERROR': '输入数据验证失败，请检查输入内容',
      'AUTHENTICATION_ERROR': '身份验证失败，请重新登录',
      'AUTHORIZATION_ERROR': '权限不足，无法执行此操作',
      'NOT_FOUND': '请求的资源不存在',
      'TIMEOUT': '请求超时，请稍后重试',
    };

    return errorMessages[error.code || ''] || error.message || this.options.defaultMessage!;
  }

  /**
   * 包装异步函数，自动处理错误
   */
  wrapAsync<T>(
    fn: () => Promise<T>,
    context?: string
  ): Promise<{ data?: T; error?: AppError }> {
    return fn()
      .then(data => ({ data, error: undefined }))
      .catch(error => ({ data: undefined, error: this.handleError(error, context) }));
  }

  /**
   * 包装同步函数，自动处理错误
   */
  wrapSync<T>(fn: () => T, context?: string): { data?: T; error?: AppError } {
    try {
      const data = fn();
      return { data, error: undefined };
    } catch (error) {
      return { data: undefined, error: this.handleError(error, context) };
    }
  }
}

// 创建默认的错误处理器
export const errorHandler = new ErrorHandler({
  onError: (error) => {
    // 这里可以集成错误上报服务
    if (process.env.NODE_ENV === 'production') {
      // 发送到错误监控服务（如 Sentry）
      console.error('Production error:', error);
    }
  },
});

/**
 * React Hook 用于组件内的错误处理
 */
export function useErrorHandler() {
  const handleError = (error: unknown, context?: string): AppError => {
    return errorHandler.handleError(error, context);
  };

  const getUserFriendlyMessage = (error: AppError): string => {
    return errorHandler.getUserFriendlyMessage(error);
  };

  return { handleError, getUserFriendlyMessage };
}