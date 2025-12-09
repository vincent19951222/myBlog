/**
 * 简单的日志工具，支持不同级别的日志记录
 * 在生产环境中自动禁用 console.log
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LoggerOptions {
  level?: LogLevel;
  prefix?: string;
  enableConsole?: boolean;
}

class Logger {
  private level: LogLevel;
  private prefix: string;
  private enableConsole: boolean;

  constructor(options: LoggerOptions = {}) {
    this.level = options.level ?? LogLevel.INFO;
    this.prefix = options.prefix ?? '';
    this.enableConsole = options.enableConsole ?? process.env.NODE_ENV !== 'production';
  }

  private shouldLog(level: LogLevel): boolean {
    return this.enableConsole && level >= this.level;
  }

  private formatMessage(level: string, message: string, ...args: any[]): string {
    const timestamp = new Date().toISOString();
    const prefix = this.prefix ? `[${this.prefix}] ` : '';
    return `[${timestamp}] ${prefix}[${level}] ${message}`;
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.debug(this.formatMessage('DEBUG', message), ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.info(this.formatMessage('INFO', message), ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage('WARN', message), ...args);
    }
  }

  error(message: string, error?: Error | unknown, ...args: any[]): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      const formattedMessage = this.formatMessage('ERROR', message);

      if (error instanceof Error) {
        console.error(formattedMessage, error.message, error.stack, ...args);
      } else if (error) {
        console.error(formattedMessage, error, ...args);
      } else {
        console.error(formattedMessage, ...args);
      }
    }
  }
}

// 创建默认logger实例
export const logger = new Logger({
  prefix: 'PixelLab',
  level: process.env.NODE_ENV === 'production' ? LogLevel.WARN : LogLevel.DEBUG,
});

// 辅助函数用于创建带前缀的logger
export function createLogger(prefix: string, options?: Omit<LoggerOptions, 'prefix'>): Logger {
  return new Logger({ ...options, prefix });
}