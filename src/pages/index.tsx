import Layout from 'components/Layout';
import RecipeCard from 'components/RecipeCard';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const index: NextPage = () => {
	const meta = {
		title: 'Recipebook | Home page',
		description: `Create your own recipebook!`,
		image: 'https://recipebooktest.netlify.app/static/images/book.png',
		type: 'website',
	};

	const recipes = [
		{
			id: 1,
			title: 'Pizza Capricciosa',
			image: '/static/images/recipes/pizza-capricciosa.jpg',
			time: 'One hour and 30 minutes',
		},
		{
			id: 2,
			title: 'Double cheese burger',
			image: '/static/images/recipes/burger.jpg',
			time: 'One hour',
		},
		{
			id: 3,
			title: 'Ceaser salad',
			image: '/static/images/recipes/salad.jpg',
			time: '15 minutes',
		},
		{
			id: 4,
			title: 'French toast',
			image: '/static/images/recipes/french-toast.jpg',
			time: 'Under 30 minutes',
		},
	];

	return (
		<Layout meta={meta}>
			<>
				<header className="h-[80vh] bg-[#E5F4EC] py-20 px-6">
					<div className="container mx-auto flex h-full flex-row items-center justify-center px-4">
						<div className="flex h-full flex-col justify-between">
							<div>
								<p className="text-2xl font-semibold text-red-400">Create your own</p>
								<h1 className="text-5xl font-extrabold md:text-8xl">Recipebook</h1>
								<div className="p-4" />
								<p className="text-lg font-medium text-gray-700">
									I&apos;m baby bespoke hammock kickstarter tumblr ugh PBR&B authentic pok pok disrupt
									YOLO cloud bread meditation direct trade helvetica.
								</p>
							</div>
							<div>
								<button
									type="button"
									className="bg-red-400 px-10 py-4 font-bold text-white transition-colors hover:bg-red-600"
								>
									<Link href="/recipes">Explore now</Link>
								</button>
							</div>
							<div className="flex flex-row">
								<div className="border-r-4 border-green-600 p-1 px-8 pl-0">
									<p className="text-xl font-bold">300+</p>
									<p className="font-bold text-gray-600">Recipes</p>
								</div>
								<div className="border-r-4 border-green-600 p-1 px-8">
									<p className="text-xl font-bold">58+</p>
									<p className="font-bold text-gray-600">Users</p>
								</div>
								<div className="p-1 px-8">
									<p className="text-xl font-bold">300+</p>
									<p className="font-bold text-gray-600">Recipes</p>
								</div>
							</div>
						</div>
						<div className="hidden w-full xl:block">
							<div className="flex w-full items-end justify-end">
								<div className="relative h-[600px] w-[585px] shadow-2xl">
									<Image
										src="/static/images/header-img.png"
										alt="Picture of the author"
										layout="fill"
										objectFit="fill"
									/>
								</div>
							</div>
						</div>
					</div>
				</header>
				<section className="bg-white py-20">
					<div className="container mx-auto space-y-20 px-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold">Latest recipes</h1>
							<hr className="w-20 border-2 border-red-400" />
						</div>
						<div className="grid grid-cols-1 grid-rows-1 place-items-center gap-14 md:grid-cols-2 lg:grid-cols-4">
							{recipes.map(({ id, title, image, time }) => (
								<RecipeCard key={id} title={title} image={image} time={time} />
							))}
						</div>
					</div>
				</section>
				<section className="bg-red-400 py-20">
					<div className="container mx-auto space-y-20 px-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold">Most popular recipes</h1>
							<hr className="w-32 border-2 border-white" />
						</div>
						<div className="grid grid-cols-1 grid-rows-1 place-items-center gap-14 md:grid-cols-2 lg:grid-cols-4">
							{recipes.map(({ id, title, image, time }) => (
								<RecipeCard key={id} title={title} image={image} time={time} />
							))}
						</div>
					</div>
				</section>
			</>
		</Layout>
	);
};

export default index;
