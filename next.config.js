/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // issues with the packages that are not included in node js
  // experimental: {
  //   serverComponentsExternalPackages: ['cloudinary-react', 'graphql-request'],
  // },
}

module.exports = nextConfig
