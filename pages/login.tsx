import Image from 'next/image';
import type { FC } from 'react';

const Login: FC = () => {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex w-1/2 flex-row">
				<div className="hidden w-1/2 md:block">
					<Image src="/static/images/login-image.jpg" alt="Login food image" width="640" height="959" />
				</div>
				<div className="w-1/2">
					<div className="p-8">
						<h1>Login in to your account</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
