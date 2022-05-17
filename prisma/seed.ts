// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
// 	await prisma.user.create({
// 		data: {
// 			name: 'Mahmoud',
// 			email: 'mahmoud@prisma.io',
// 			posts: {
// 				create: [
// 					{
// 						title: 'Ask a question about Prisma on GitHub',
// 						content: 'https://www.github.com/prisma/prisma/discussions',
// 						published: true,
// 					},
// 					{
// 						title: 'Prisma on YouTube',
// 						content: 'https://pris.ly/youtube',
// 					},
// 				],
// 			},
// 		},
// 	});
// }

// main()
// 	.catch((e) => {
// 		// eslint-disable-next-line no-console
// 		console.warn(e);
// 		process.exit(1);
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect();
// 	});
