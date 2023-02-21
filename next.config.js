/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['nypost.com', 'static01.nyt.com', 's.abcnews.com', 'cdn.cnn.com', 'content.fortune.com', 'i-invdn-com.investing.com', 'scx1.b-cdn.net', 'www.si.com', 'www.yardbarker.com', 'image-cdn.essentiallysports.com', 'library.sportingnews.com', 'www.staging.essentiallysports.com', 'www.sportsnet.ca', 'static.sportskeeda.com'],
  },
}

module.exports = nextConfig
