import {qualificationColumns} from '@/data/data'
import fetch from 'isomorphic-unfetch'
import {Table, Input} from 'antd'

export async function getServerSideProps () {
  const res = await fetch('http://localhost:3000/api/user');
  const response = await res.json();
  return {
    props: {
      data: response
    }
  }
}

const App = ({data}) => {
  return (
    <div>
      <Table
      rowKey="id"
      size="small"
      columns={qualificationColumns}
      dataSource={data.list}
      pagination={false}
      scroll={{ x: 1400 }}
      style={{ marginTop: '24px'}}
    />
    </div>
  )
}

export default App;