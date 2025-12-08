/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  // 开启 trailingSlash 以生成 index.html 结构 (如 /about/index.html)，
  // 这样在宝塔/Nginx 等静态服务器上可以直接访问 /about 而不需要特殊配置。
  trailingSlash: true,
  
  // 👇 加上这一段，防止打包时图片报错
  images: {
    unoptimized: true,
  },
}

export default nextConfig
