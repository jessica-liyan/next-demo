import Layout from '../components/Layout'
import Link from 'next/link'
import {providerColumns} from '../data/data'
import fetch from 'isomorphic-unfetch'
import {Table} from 'antd'

export async function getStaticProps () {
  const res = await fetch('http://veersignadminservice-vcg-com.cb16adeacafeb4b9b988ae5d7e8bf0fc1.cn-beijing.alicontainer.com/signProvider/queryProviderInfo', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post', 
    body: JSON.stringify({
      "currentPage": 1,
      "pageSize": 10,
      "queryReqDTO": {}
    })
  })
  const response = await res.json();
  console.log('response', response)
  return {
    props: {
      data: response.data
    }
  }
}

const App = ({data}) => (
  <Layout>
    <Table
      size="small"
      columns={providerColumns}
      dataSource={data.list}
      pagination={false}
      scroll={{ x: 1400 }}
      style={{ marginTop: '24px'}}
    />
    <ul>
      <li><Link href={`/post/1`}>hello</Link></li>
      <li><Link href={`/post/2`}>hello1</Link></li>
    </ul>
  </Layout>
)

export default App;