// Jest 测试环境设置
import '@testing-library/jest-dom';

// 模拟 Next.js 路由
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      pathname: '/',
      query: {},
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// 模拟环境变量
process.env.GEMINI_API_KEY = 'test-api-key';
process.env.NODE_ENV = 'test';

// 全局错误处理，避免测试中未捕获的错误
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    // 忽略特定的警告或错误
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});