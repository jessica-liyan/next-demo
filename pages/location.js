import { useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Location = ({ data }) => {
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetch('/v1/task/locationList');
    const response = await res.json();
    console.log('请求', response)
  }
  return <div>
    location
    <Head>
      <title>标题</title>
      <meta name="description" content="描述"/>
    </Head>
  </div>
}

export async function getStaticProps () {
  const res = await fetch('https://500px.me/task/locationList');
  const response = await res.json();
  return {
    props: {
      data: response.data
    }
  }
}

export default Location;