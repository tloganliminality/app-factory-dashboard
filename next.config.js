/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standard Next.js server (not static export)
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig