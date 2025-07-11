import Discord from "next-auth/providers/discord";

const authConfig = {
    providers: [Discord],
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth
        },
    },
    pages: {
        signIn: "/login"
    },
}

export default authConfig