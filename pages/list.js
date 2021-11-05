import Link from 'next/link'

const List = () => (
  <ul>
    <li><Link href={`/post/1`}>hello</Link></li>
    <li><Link href={`/post/2`}>hello1</Link></li>
  </ul>
)

export default List;