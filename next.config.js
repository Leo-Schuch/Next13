/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true 
  },
  images:{
    domains: ["www.notebookcheck.net"]   
  },
}

module.exports = nextConfig
