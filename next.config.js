/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nextchar-ventures',
  assetPrefix: '/nextchar-ventures/',
}

module.exports = nextConfig 