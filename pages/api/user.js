import fetch from 'isomorphic-unfetch'

const baseUrl = 'https://test-api-platform.veer.com';

export default async function handler (req, res) {
  const test = await fetch(`${baseUrl}/signadmin/manage/qualification/query`, {
    headers: {
      'Content-Type': 'application/json',
      'Request-Src': 'signadmin'
    },
    method: 'post', 
    body: JSON.stringify({
      "currentPage": 1,
      "pageSize": 10,
      "queryReqDTO": {}
    })
  })
  const data = await test.json()
  res.json(data.data)
}