import axios from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Providers from 'next-auth/providers'
import type { NextApiRequest, NextApiResponse } from "next"

const settings: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "google") {
                const { accessToken, idToken } = account
                try {
                    const response = await axios.post(
                        `${process.env.DJANGO_URL}/api/social/login/google/`,
                        {
                            access_token: accessToken,
                            id_token: idToken,
                        }
                    )
                    const { access_token } = response.data
                    user.accessToken = access_token

                    return true
                } catch (error) {
                    return false
                }
            }
            return false
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                const { accessToken } = user

                token.accessToken = accessToken;
            }
            return token;
        },
        //セッションがチェックされた時に呼ばれる
        async session({ session, user }) {
            session.accessToken = user.accessToken;
            return session;
        },
    },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, settings)