const Home = () => {
	return (
		<div className="h-screen">
			<nav className="bg-white drop-shadow-md px-2 sm:px-4 py-7 fixed w-full">
				<div className="container flex flex-wrap justify-between items-center mx-auto">
					<a href="#" className="flex items-center">
						<span className="self-center text-xl font-bold whitespace-nowrap">Recipebook</span>
					</a>
					<div className="flex md:order-2">
						<button type="button">
							<img src="icons/search.svg" alt="search icon" className="mx-2" />
						</button>
						<button type="button">
							<img src="icons/user.svg" alt="user icon" className="mx-2" />
						</button>
					</div>
					<div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
						<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							<li>
								<a href="#" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="container flex mx-auto h-full">
				<div className="flex-auto flex w-1/2">
					<div className="flex flex-col items-start justify-center">
						<h1 className="font-bold text-3xl my-5">Search through your favorite recipes.</h1>
						<p className="text-gray-600 my-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nisi dolor! Iste velit iusto cumque ut obcaecati similique atque molestiae minus excepturi voluptate aspernatur neque,
							amet placeat earum quod doloribus!
						</p>
						<button
							type="button"
							className="text-gray-900 hover:text-white border border-gray-900 hover:bg-gray-900 transition-colors font-medium rounded-md text-sm px-5 py-2 text-center mr-3 md:mr-0"
						>
							Get started
						</button>
					</div>
				</div>
				<div className="flex-auto flex items-center justify-center w-1/2">
					<img src="images/food.png" alt="food image" className="w-96" />
				</div>
			</div>
			<div className="h-screen bg-gray-200">
				<h1>hello</h1>
			</div>
		</div>
	);
};
export default Home;
