/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14+
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features for static export
  experimental: {
    // missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig