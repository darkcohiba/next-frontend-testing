// https://next-auth.js.org/configuration/options

import type { NextAuthOptions } from "next-auth";
import RedditProvider from "next-auth/providers/reddit";


export const options: NextAuthOptions = {
    providers: [
        RedditProvider({
            clientId: process.env.REDDIT_CLIENT_ID,
            clientSecret: process.env.REDDIT_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/signin',
        signOut: '/signout'
    }
}