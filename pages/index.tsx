import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const index: NextPage = () => {
	const meta = {
		title: 'Recipebook',
		description: `Website description`,
		image: 'https://leerob.io/static/images/banner.png',
		type: 'website',
	};
	return (
		<main className="flex h-screen flex-col bg-[#E5F4EC]">
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:url" content="https://recipebooktest.netlify.app" />
				<link rel="canonical" href="https://recipebooktest.netlify.app" />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Recipebook" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
			</Head>
			<nav className="flex-none py-3">
				<div className="container mx-auto">
					<div className="flex flex-row items-center justify-between">
						<Link href="/">
							<a className="mr-12 flex-none text-xl font-bold">Recipebook</a>
						</Link>
						<ul className="flex flex-1 flex-row items-center justify-start">
							<li className="mx-4">
								<Link href="/explore">Explore</Link>
							</li>
							<li className="mx-4">
								<Link href="/explore">Categories</Link>
							</li>
							<li className="mx-4">
								<Link href="/explore">Search</Link>
							</li>
						</ul>
						<div className="w-fit">
							<button type="button" className="mr-8">
								Log in
							</button>
							<button type="button" className="bg-[#FF5F5F] p-2 px-3 text-white">
								Get started
							</button>
						</div>
					</div>
				</div>
			</nav>
			<header className="flex-1 bg-[#E5F4EC]">
				<div className="container mx-auto flex h-full flex-row items-center justify-center">
					<div className="w-full">
						<p>Create your own</p>
						<h1>Recipebook</h1>
						<p>
							I&apos;m baby bespoke hammock kickstarter tumblr ugh PBR&B authentic pok pok disrupt YOLO
							cloud bread meditation direct trade helvetica.
						</p>
					</div>
					<div className="w-full">Hello2</div>
				</div>
			</header>
		</main>
	);
};

export default index;
