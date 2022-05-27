import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="bg-[#E5F4EC] py-3">
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
	);
};

export default Navbar;
