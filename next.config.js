/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standard Next.js server (not static export)
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Ensure server binds to 0.0.0.0 for Railway
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig