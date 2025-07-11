import NextAuth from "next-auth";
import authConfig from "@/utils/auth.config";

export const { auth: middleware } = NextAuth(authConfig)
// export default auth((req) => {
//     if (!req.auth && req.nextUrl.pathname !== "/login") {
//         const newUrl = new URL("/login", req.nextUrl.origin)
//         return Response.redirect(newUrl)
//     }
// })

export const config = {
    matcher: ["/chat/:path*"],
}