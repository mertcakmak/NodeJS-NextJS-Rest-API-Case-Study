/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REST_API_URL: process.env.REST_API_URL,
  },
}

module.exports = nextConfig
