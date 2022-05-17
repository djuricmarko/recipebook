import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import prisma from '../../../lib/prisma';

const options = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			checks: 'state',
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
		// EmailProvider({
		// 	server: {
		// 		host: process.env.SMTP_HOST,
		// 		port: Number(process.env.SMTP_PORT),
		// 		auth: {
		// 			user: process.env.SMTP_USER,
		// 			pass: process.env.SMTP_PASSWORD,
		// 		},
		// 	},
		// 	from: process.env.SMTP_FROM,
		// }),
	],
	adapter: PrismaAdapter(prisma),
	secret: process.env.SECRET,
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
