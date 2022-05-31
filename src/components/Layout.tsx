import type { ReactElement } from 'react';
import React from 'react';

import Navbar from './navigation/Navbar';

type AppProps = {
	children: ReactElement;
};

export default function Layout({ children }: AppProps) {
	return (
		<React.Fragment>
			<Navbar />
			<main className="overflow-hidden bg-[#E5F4EC]">{children}</main>
		</React.Fragment>
	);
}
