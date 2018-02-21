import Layout from '../components/layout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/posts/${props.id}`} href={`/posts?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)