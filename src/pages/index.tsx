import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout';

const index: NextPage = () => {
	const meta = {
		title: 'Recipebook | Home page',
		description: `Create your own recipebook!`,
		image: 'https://recipebooktest.netlify.app/static/images/book.png',
		type: 'website',
	};

	return (
		<Layout>
			<>
				<Head>
					<title>{meta.title}</title>
					<meta name="robots" content="follow, index" />
					<meta content={meta.description} name="description" />
					<meta property="og:url" content={`https://recipebooktest.netlify.app`} />
					<link rel="canonical" href={`https://recipebooktest.netlify.app`} />
					<meta property="og:type" content={meta.type} />
					<meta property="og:site_name" content="Recipebook" />
					<meta property="og:description" content={meta.description} />
					<meta property="og:title" content={meta.title} />
					<meta property="og:image" content={meta.image} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="https://recipebooktest.netlify.app" />
					<meta name="twitter:title" content={meta.title} />
					<meta name="twitter:description" content={meta.description} />
					<meta name="twitter:image" content={meta.image} />
				</Head>
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
					<h1>Hello</h1>
				</section>
			</>
		</Layout>
	);
};

export default index;
