import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" name="robots" />
			</Head>
			<body className="bg-white antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
