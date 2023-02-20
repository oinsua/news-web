/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.voanews.com', 'www.awardsdaily.com', 'cdn.mos.cms.futurecdn.net', 'i2-prod.examinerlive.co.uk', 'www.iwmbuzz.com', 'headlineplanet.com'],
  },
}

module.exports = nextConfig
