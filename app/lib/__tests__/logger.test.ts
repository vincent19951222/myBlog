import { logger, createLogger, LogLevel } from '../logger';

describe('Logger', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    // 清空所有 console 调用
    consoleSpy = jest.spyOn(console, 'info').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('createLogger', () => {
    it('应该创建带前缀的 logger', () => {
      const customLogger = createLogger('TestComponent');
      customLogger.info('测试消息');

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('[TestComponent]'),
        expect.stringContaining('测试消息')
      );
    });
  });

  describe('log levels', () => {
    it('应该根据级别过滤日志', () => {
      const debugLogger = createLogger('Debug', { level: LogLevel.DEBUG });
      const errorLogger = createLogger('Error', { level: LogLevel.ERROR });

      const debugSpy = jest.spyOn(console, 'debug').mockImplementation();
      const errorSpy = jest.spyOn(console, 'error').mockImplementation();

      debugLogger.debug('debug message');
      errorLogger.debug('debug message');

      expect(debugSpy).toHaveBeenCalled();
      expect(errorSpy).not.toHaveBeenCalled();

      debugSpy.mockRestore();
      errorSpy.mockRestore();
    });
  });

  describe('error logging', () => {
    it('应该正确处理 Error 对象', () => {
      const errorSpy = jest.spyOn(console, 'error').mockImplementation();
      const testError = new Error('测试错误');

      logger.error('发生错误', testError);

      expect(errorSpy).toHaveBeenCalledWith(
        expect.stringContaining('发生错误'),
        '测试错误',
        expect.stringContaining('Error: 测试错误')
      );

      errorSpy.mockRestore();
    });
  });
});