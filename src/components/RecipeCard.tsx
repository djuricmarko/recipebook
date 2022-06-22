import { ClockIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	id: number;
	title: string;
	image: string;
	time: string;
};

const RecipeCard = ({ id, title, image, time }: Props) => {
	return (
		<Link href={`/recipe/${id}`}>
			<div className="flex w-full cursor-pointer flex-col">
				<div className="relative bg-gradient-to-t from-gray-800 to-gray-500 shadow-2xl">
					<div className="relative h-[400px] mix-blend-overlay">
						<Image src={image} alt="Picture of the author" layout="fill" objectFit="cover" />
					</div>
					<div className="absolute bottom-3 left-3 flex items-center">
						<ClockIcon className="h-5 w-5 text-white" />
						<p className="ml-2 font-bold text-white">{time}</p>
					</div>
				</div>
				<p className="my-2 truncate text-lg font-bold">{title}</p>
			</div>
		</Link>
	);
};

export default RecipeCard;
