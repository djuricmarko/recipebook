import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

const Navbar = () => {
	const { data: session, status } = useSession();
	const [dropdownActive, setDropdownActive] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const handleSignOut = async () => {
		try {
			await signOut();
		} catch (err) {
			setError('Something went wrong.');
		}
	};

	return (
		<nav className="flex-none bg-[#E5F4EC] px-5 py-6 shadow-sm">
			<div className="container mx-auto">
				<div className="flex flex-row items-center justify-between">
					<Link href="/">
						<a className="mr-12 flex-none text-xl font-bold">Recipebook</a>
					</Link>
					<ul className="hidden flex-1 flex-row items-center justify-start md:flex">
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
					{status === 'loading' && (
						<div className="flex animate-pulse items-center justify-center space-x-2">
							<div className="h-10 w-10 rounded-full bg-red-400"></div>
						</div>
					)}
					{status === 'authenticated' && (
						<div className="relative flex w-fit items-center">
							<button onClick={() => setDropdownActive(!dropdownActive)} type="button">
								{session.user.image ? (
									<img
										id="avatar"
										className="ml-4 h-10 w-10 cursor-pointer rounded-full"
										src={session.user.image}
										alt="user image"
									/>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-10 w-10 rounded-full bg-red-400 p-2"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</button>
							{dropdownActive && (
								<div
									onBlur={() => setDropdownActive(false)}
									tabIndex={0}
									className="absolute right-0 z-10 mt-72 w-44 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg"
								>
									<div className="px-4 py-3 text-sm text-gray-900">
										<div>{session.user.name}</div>
										<div className="truncate font-medium">{session.user.email}</div>
									</div>
									<ul className="py-1 text-sm text-gray-700">
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">
												Dashboard
											</a>
										</li>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">
												Settings
											</a>
										</li>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">
												Earnings
											</a>
										</li>
									</ul>
									<div className="py-1">
										<a
											onClick={handleSignOut}
											className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>
											{error === '' ? 'Sign out' : error}
										</a>
									</div>
								</div>
							)}
						</div>
					)}
					{status === 'unauthenticated' && (
						<div className="hidden w-fit md:block">
							<button type="button" className="mr-8 font-bold">
								<Link href="/login">Log in</Link>
							</button>
							<button
								type="button"
								className="bg-[#FF5F5F] p-2 px-3 font-bold text-white transition-colors hover:bg-red-600"
							>
								<Link href="/register">Get started</Link>
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
