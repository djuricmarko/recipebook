/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import LoginForm from 'components/forms/LoginForm';
import RegisterForm from 'components/forms/RegisterForm';
import { AnimatePresence } from 'framer-motion';
import { Fragment, useState } from 'react';

type Props = {
	active: boolean;
	handleSidebarActive: () => void;
};

const formAnimation = {
	initial: {
		x: '-50%',
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		scale: 1,
	},
	exit: {
		x: '50%',
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
	transition: {
		duration: 0.3,
		ease: 'easeOut',
	},
};

const AuthSidebar = ({ active, handleSidebarActive }: Props) => {
	const [activeView, setActiveView] = useState<'LOGIN' | 'REGISTER'>('LOGIN');

	const handleSetRegisterView = () => {
		setActiveView('REGISTER');
	};

	const handleSetLoginView = () => {
		setActiveView('LOGIN');
	};

	return (
		<Transition.Root show={active} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={handleSidebarActive}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
											<button
												type="button"
												className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
												onClick={handleSidebarActive}
											>
												<span className="sr-only">Close panel</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
										<div className="relative mt-6 flex-1 px-4 sm:px-6">
											<AnimatePresence exitBeforeEnter>
												{activeView === 'LOGIN' && (
													<LoginForm
														formAnimation={formAnimation}
														handleSetRegisterView={handleSetRegisterView}
													/>
												)}

												{activeView === 'REGISTER' && (
													<RegisterForm
														formAnimation={formAnimation}
														handleSetLoginView={handleSetLoginView}
													/>
												)}
											</AnimatePresence>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default AuthSidebar;
