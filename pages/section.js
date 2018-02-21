import Layout from '../components/layout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
       <h1>{props.show.Description}</h1>
       <p>Title: {props.show.title}</p>
       <p>Key: {props.show.key}</p>
       <p>Active: {(props.show.active == '1')?"Ano":"Ne"}</p>
       <p>Code: {props.show.return_error_code}</p>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://bajt.rrsoft.cz/api/sections/${id}/`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post