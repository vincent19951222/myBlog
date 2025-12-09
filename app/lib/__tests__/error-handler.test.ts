import { ErrorHandler, errorHandler, useErrorHandler } from '../error-handler';

describe('ErrorHandler', () => {
  let errorHandlerInstance: ErrorHandler;

  beforeEach(() => {
    errorHandlerInstance = new ErrorHandler();
  });

  describe('createError', () => {
    it('应该创建包含正确结构的应用错误', () => {
      const error = errorHandlerInstance.createError(
        '测试错误消息',
        'TEST_ERROR',
        { detail: '额外信息' }
      );

      expect(error).toEqual({
        message: '测试错误消息',
        code: 'TEST_ERROR',
        details: { detail: '额外信息' },
        timestamp: expect.any(Date),
      });
    });
  });

  describe('handleError', () => {
    it('应该正确处理 Error 对象', () => {
      const originalError = new Error('原始错误');
      const appError = errorHandlerInstance.handleError(originalError, '测试上下文');

      expect(appError.message).toBe('原始错误');
      expect(appError.code).toBe('Error');
      expect(appError.details).toEqual({
        stack: originalError.stack,
        context: '测试上下文',
      });
    });

    it('应该正确处理字符串错误', () => {
      const appError = errorHandlerInstance.handleError('字符串错误', '测试上下文');

      expect(appError.message).toBe('字符串错误');
      expect(appError.code).toBe('STRING_ERROR');
      expect(appError.details).toEqual({ context: '测试上下文' });
    });

    it('应该为未知错误提供默认消息', () => {
      const appError = errorHandlerInstance.handleError({ unknown: 'object' });

      expect(appError.message).toBe('发生未知错误，请稍后重试');
      expect(appError.code).toBe('UNKNOWN_ERROR');
    });
  });

  describe('getUserFriendlyMessage', () => {
    it('应该返回用户友好的错误消息', () => {
      const testCases = [
        { code: 'NETWORK_ERROR', expected: '网络连接失败，请检查网络连接' },
        { code: 'API_ERROR', expected: '服务器响应错误，请稍后重试' },
        { code: 'VALIDATION_ERROR', expected: '输入数据验证失败，请检查输入内容' },
        { code: 'UNKNOWN_CODE', expected: '原始错误消息' },
      ];

      testCases.forEach(({ code, expected }) => {
        const error = errorHandlerInstance.createError('原始错误消息', code);
        const friendlyMessage = errorHandlerInstance.getUserFriendlyMessage(error);
        expect(friendlyMessage).toBe(expected);
      });
    });
  });

  describe('wrapAsync', () => {
    it('应该成功包装异步函数', async () => {
      const successFn = async () => '成功结果';
      const result = await errorHandlerInstance.wrapAsync(successFn);

      expect(result).toEqual({
        data: '成功结果',
        error: undefined,
      });
    });

    it('应该处理异步函数中的错误', async () => {
      const errorFn = async () => {
        throw new Error('异步错误');
      };
      const result = await errorHandlerInstance.wrapAsync(errorFn);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.error?.message).toBe('异步错误');
    });
  });

  describe('wrapSync', () => {
    it('应该成功包装同步函数', () => {
      const successFn = () => '成功结果';
      const result = errorHandlerInstance.wrapSync(successFn);

      expect(result).toEqual({
        data: '成功结果',
        error: undefined,
      });
    });

    it('应该处理同步函数中的错误', () => {
      const errorFn = () => {
        throw new Error('同步错误');
      };
      const result = errorHandlerInstance.wrapSync(errorFn);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.error?.message).toBe('同步错误');
    });
  });
});