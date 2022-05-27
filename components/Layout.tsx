import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactChild } from 'react';
import React from 'react';

import Navbar from './navigation/Navbar';

type AppProps = {
	title: string;
	description: string;
	children: ReactChild;
};

export default function Layout({ title, description, children }: AppProps) {
	const router = useRouter();

	const meta = {
		title,
		description,
		image: 'https://leerob.io/static/images/banner.png',
		type: 'website',
	};

	return (
		<React.Fragment>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:url" content={`https://recipebooktest.netlify.app${router.asPath}`} />
				<link rel="canonical" href={`https://recipebooktest.netlify.app${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Recipebook" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
			</Head>
			<Navbar />
			<main className="overflow-hidden bg-[#E5F4EC]">{children}</main>
		</React.Fragment>
	);
}
