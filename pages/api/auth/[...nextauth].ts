import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';

import prisma from '../../../lib/prisma';

const options = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		EmailProvider({
			server: {
				host: process.env.SMTP_HOST,
				port: Number(process.env.SMTP_PORT),
				auth: {
					user: process.env.SMTP_USER,
					pass: process.env.SMTP_PASSWORD,
				},
			},
			from: process.env.SMTP_FROM,
		}),
	],
	adapter: PrismaAdapter(prisma),
	secret: process.env.SECRET,
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
