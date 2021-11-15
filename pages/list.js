import Link from 'next/link'

const List = ({ data }) => (
  <ul>
    {
      data.map(item => <li key={item.id}><Link href={`/post/${item.id}`}>{item.title}</Link></li>)
    }
    <li><Link href={`#test`}>hash跳转</Link></li>
  </ul>
)

export async function getStaticProps () {
  const data = [{
    id: '1',
    title: 'list1'
  }, {
    id: '2',
    title: 'list2'
  }]
  return {
    props: {
      data
    }
  }
}

export default List;