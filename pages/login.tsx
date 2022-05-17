import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';

const Login: FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// eslint-disable-next-line no-console
	console.log(email, password);

	return (
		<div className="flex h-screen items-center justify-center bg-[#E5F4EC]">
			<div className="flex h-max flex-row">
				<div className="hidden lg:block">
					<img src="/static/images/login-image.jpg" alt="Login food image" className="h-[628px]" />
				</div>
				<div className="bg-[#FAFAFA]">
					<div className="m-2 flex h-full flex-col items-start justify-start p-14 lg:w-[500px]">
						<h1 className="text-2xl font-bold">Login in to your account</h1>
						<div className="p-6" />
						<label htmlFor="email">Email</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							name="email"
							className="w-full rounded border-2 p-3 focus:border-gray-500 focus:outline-none focus:ring-gray-500"
							placeholder="Enter your email"
						/>
						<div className="p-4" />
						<label htmlFor="password">Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							name="password"
							className="w-full rounded border-2 p-3 focus:border-gray-500 focus:outline-none focus:ring-gray-500"
							placeholder="Enter your password"
						/>
						<Link href="/login">
							<a className="mt-3 hover:underline">Forgot password?</a>
						</Link>
						<div className="p-4" />
						<button
							type="button"
							className="w-full rounded bg-red-400 p-3 text-white transition-colors duration-300 hover:bg-red-500"
						>
							Login
						</button>
						<div className="relative my-4 flex w-full items-center py-4">
							<div className="grow border-t border-gray-300"></div>
							<span className="mx-4 shrink text-gray-400">OR</span>
							<div className="grow border-t border-gray-300"></div>
						</div>
						<button
							type="button"
							className="inline-flex w-full items-center justify-center rounded bg-[#4285F4] p-3 text-white transition-colors duration-300 hover:bg-blue-600 focus:outline-none"
						>
							<svg
								className="mr-2 -ml-1 h-4 w-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="google"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 488 512"
							>
								<path
									fill="currentColor"
									d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
								></path>
							</svg>
							Sign in with Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
