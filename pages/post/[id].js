import Link from 'next/link';
import Router, {useRouter} from 'next/router'

const Post = ({data}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>loading...</div>
  }
  return  (
    <div>
      router参数：{router.query.id}
      <p>{data}</p>
    </div>
  )
}

export async function getStaticPaths () {
  return {
    paths: [
      {
        params: {id: '1'}
      },
      {
        params: {id: '2'}
      }
    ],
    fallback: 'blocking'
  }
}

export async function getStaticProps ({ params }) {
  const data = `返回${params.id}的详情数据`
  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export default Post;