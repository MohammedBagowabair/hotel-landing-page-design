/** @type {import('next').NextConfig} */
const basePath = (process.env.BASE_PATH ?? '').replace(/\/$/, '')

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
