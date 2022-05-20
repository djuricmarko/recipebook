import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import prisma from '../../../lib/prisma';

const options = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: process.env.SECRET,
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
