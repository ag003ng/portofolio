/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portofolio',
  assetPrefix: '/portofolio/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
