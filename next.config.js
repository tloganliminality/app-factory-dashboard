/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14+
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Server-side rendering for Railway deployment
  experimental: {
    // missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig