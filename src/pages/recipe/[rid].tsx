import Layout from 'components/layouts/Layout';

const Recipe = () => {
	const meta = {
		title: 'Recipebook | Home page',
		description: `Create your own recipebook!`,
		image: 'https://recipebooktest.netlify.app/static/images/book.png',
		type: 'website',
	};

	return (
		<Layout meta={meta}>
			<div className="min-h-screen">
				<h1>Hello</h1>
			</div>
		</Layout>
	);
};
export default Recipe;
