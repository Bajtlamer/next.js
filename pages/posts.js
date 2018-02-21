import Layout from '../components/layout';

export default (props) => (
	<Layout>
		<h1>Posts page {props.url.query.id}</h1>
	</Layout>
)