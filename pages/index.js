import {providerColumns} from '../data/data'
import fetch from 'isomorphic-unfetch'
import {Table, Input} from 'antd'

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
  return {
    props: {
      data: response.data
    }
  }
}

const App = ({data}) => (
  <div>
    <Input />
    <Table
      rowKey="id"
      size="small"
      columns={providerColumns}
      dataSource={data.list}
      pagination={false}
      scroll={{ x: 1400 }}
      style={{ marginTop: '24px'}}
    />
  </div>
)

export default App;