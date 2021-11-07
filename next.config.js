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
        source: '/lists',
        destination: '/list'
      }
    ]
  }
}