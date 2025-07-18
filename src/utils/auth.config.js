import Discord from "next-auth/providers/discord";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const authConfig = {
    providers: [Discord, GitHub, Google],
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth
        },
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
                token.id = user.id
            }
            return token
        },
        session({ session, token }) {
            session.user.id = token.id
            return session
        },
    },
    pages: {
        signIn: "/login"
    },
}

export default authConfig