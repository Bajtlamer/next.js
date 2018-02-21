import Layout from '../components/layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Sekce (seznam)</h1>
    <ul>
      {props.shows.map((section) => (
        <li key={section.section_id}>
          <Link as={`/section/${section.section_id}`} href={`/section?id=${section.section_id}`}>
            <a>{section.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://bajt.rrsoft.cz/api/sections/')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index