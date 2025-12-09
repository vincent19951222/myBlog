/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // 优化字体加载
  experimental: {
    optimizeCss: true,
  },

  // 注意：静态导出模式下 headers 配置不会生效
  // 需要在部署服务器上配置安全头部
}

export default nextConfig
