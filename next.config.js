/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['nypost.com', 'static01.nyt.com', 's.abcnews.com', 'cdn.cnn.com'],
  },
}

module.exports = nextConfig
