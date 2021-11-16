const isProd = process.env.NODE_ENV == 'production';

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
  },
  // 不能用于getServerSideProps  getStaticProps页面，因为构建时就渲染成了html
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/about': { page : '/about'}
    }
  },
  assetPrefix: isProd ? './' : ''
}