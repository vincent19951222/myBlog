/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR 模式 - 不再使用静态导出
  // 部署时使用 PM2 运行 next start，Nginx 反向代理
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // 优化字体加载
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig

