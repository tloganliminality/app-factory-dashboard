/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standard Next.js server (not static export)
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Use standalone output for Railway
  output: 'standalone'
}

module.exports = nextConfig