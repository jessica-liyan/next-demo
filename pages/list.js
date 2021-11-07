import Link from 'next/link'
import Router from 'next/router'

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]
function makeEvent (event) {
  return (...args) => {
    console.log('路由', event, ...args)
  }
}

events.map(event => {
  Router.events.on(event, makeEvent(event))
})

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