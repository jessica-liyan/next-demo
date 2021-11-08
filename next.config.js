module.exports = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites () {
    return [
      {
        source: '/v1/:path*',
        destination: 'https://photo-test-community.shijue.me/:path*'
      }
    ]
  }
}