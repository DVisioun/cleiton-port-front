/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/home',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
