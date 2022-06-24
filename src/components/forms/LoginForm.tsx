import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginForm = ({ formAnimation, handleSetRegisterView }) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');

	// eslint-disable-next-line no-console
	console.log(email, password);

	async function googleSignIn() {
		try {
			await signIn('google', { callbackUrl: '/' });
		} catch (err) {
			setError('Something went wrong.');
		}
	}

	return (
		<motion.div
			key={'login'}
			{...formAnimation}
			className="flex h-full w-full flex-col items-start justify-center space-y-5 p-6 md:p-14"
		>
			<Dialog.Title className="text-xl font-bold text-gray-900">Hi, login to your account</Dialog.Title>
			<div>
				<label htmlFor="email">Email</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					name="email"
					className="w-full rounded border-2 p-3 hover:border-gray-300 focus:border-green-400 focus:outline-none focus:ring-gray-500"
					placeholder="Enter your email"
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					name="password"
					className="w-full rounded border-2 p-3 hover:border-gray-300 focus:border-green-400 focus:outline-none focus:ring-gray-500"
					placeholder="Enter your password"
				/>
			</div>
			{error && <span>{error}</span>}
			<Link href="/login">
				<a className="mt-3 hover:underline">Forgot your password?</a>
			</Link>
			<button
				type="button"
				className="w-full rounded bg-red-400 p-3 font-bold text-white transition-colors duration-300 hover:bg-red-500"
			>
				Log in
			</button>
			<div className="relative my-4 flex w-full items-center py-4">
				<div className="grow border-t border-gray-300"></div>
				<span className="mx-4 shrink text-gray-400">OR</span>
				<div className="grow border-t border-gray-300"></div>
			</div>
			<button
				onClick={googleSignIn}
				type="button"
				className="inline-flex w-full items-center justify-center rounded border-2 border-[#4285F4] bg-transparent p-2 font-bold text-[#4285F4] transition-colors duration-300 hover:bg-blue-600 hover:text-white focus:outline-none"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 48 48"
					width="48px"
					height="48px"
					className="mr-3 h-7 w-7"
				>
					<path
						fill="#fbc02d"
						d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
					/>
					<path
						fill="#e53935"
						d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
					/>
					<path
						fill="#4caf50"
						d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
					/>
					<path
						fill="#1565c0"
						d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
					/>
				</svg>
				Sign in with Google
			</button>
			<p className="text-gray-600">
				Don&apos;t have an accout?{' '}
				<button onClick={handleSetRegisterView} type="button" className="text-red-500 hover:underline">
					Register now!
				</button>
			</p>
		</motion.div>
	);
};
export default LoginForm;
