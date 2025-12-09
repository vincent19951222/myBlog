/**
 * 环境变量验证和类型安全访问
 */

import { z } from 'zod';

const envSchema = z.object({
  // API 配置
  GEMINI_API_KEY: z.string().min(1, 'GEMINI_API_KEY is required'),

  // 应用环境
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // Next.js 配置
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
});

// 定义客户端环境变量（前缀为 NEXT_PUBLIC_）
const clientEnvSchema = envSchema.pick({
  NODE_ENV: true,
  NEXT_PUBLIC_SITE_URL: true,
});

// 定义服务端环境变量
const serverEnvSchema = envSchema.pick({
  GEMINI_API_KEY: true,
});

// 类型定义
export type Env = z.infer<typeof envSchema>;
export type ClientEnv = z.infer<typeof clientEnvSchema>;
export type ServerEnv = z.infer<typeof serverEnvSchema>;

/**
 * 验证环境变量
 */
function validateEnv(): Env {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
      throw new Error(`环境变量验证失败:\n${errors.join('\n')}`);
    }
    throw error;
  }
}

/**
 * 获取客户端环境变量（这些变量会被打包到客户端代码中）
 */
export function getClientEnv(): ClientEnv {
  if (typeof window === 'undefined') {
    // 服务端渲染时从 process.env 获取
    const env = validateEnv();
    return clientEnvSchema.parse(env);
  } else {
    // 客户端从全局变量获取（需要在页面中注入）
    return clientEnvSchema.parse({
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    });
  }
}

/**
 * 获取服务端环境变量（只能在服务端使用）
 */
export function getServerEnv(): ServerEnv {
  if (typeof window !== 'undefined') {
    throw new Error('不能在客户端访问服务端环境变量');
  }

  const env = validateEnv();
  return serverEnvSchema.parse(env);
}

/**
 * 获取所有环境变量（仅用于服务端初始化）
 */
export function getEnv(): Env {
  if (typeof window !== 'undefined') {
    throw new Error('不能在客户端访问所有环境变量');
  }

  return validateEnv();
}

// 导出验证后的环境变量（仅服务端使用）
export const env = typeof window === 'undefined' ? getEnv() : null;