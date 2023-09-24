// https://next-auth.js.org/configuration/options

import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
    providers: [],
    pages: {
        signIn: '/signin',
        signOut: '/signout'
    }
}