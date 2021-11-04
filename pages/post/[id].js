import Link from 'next/link';
import {useRouter} from 'next/router'

const Post = () => {
  const router = useRouter()
  console.log(router)
  return  (
    <div>
      post {router.query.id}
    </div>
  )
}

export default Post;