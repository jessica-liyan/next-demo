import Layout from '../components/Layout'
import 'antd/dist/antd.css'

export default function MyApp({ Component, pageProps }) {
  var getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />)
}