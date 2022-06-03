import type { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center space-y-10">
			<h1 className="text-3xl font-extrabold text-black transition-colors hover:text-red-400">Recipebook</h1>
			<h2 className="text-5xl">404 - Page Not Found</h2>
			<Link href="/">
				<a className="text-lg underline">Go back home</a>
			</Link>
		</div>
	);
};

export default NotFound;
