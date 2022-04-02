import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'lib/prisma';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        session: async ({ session, user }) => {
            const allowedActions = user.allowedActions
                ? user.allowedActions
                : '';
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    allowedActions: allowedActions.split(','),
                },
            };
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image?: string | null;
            allowedActions: string[];
        };
    }

    interface User {
        allowedActions?: string | null;
    }
}
