import NextAuth from "next-auth"
import {Pool} from "pg";
import PostgresAdapter from "@auth/pg-adapter";
import authConfig from "@/utils/auth.config";

const pool = new Pool({
    host: process.env.PG_DATABASE_HOST,
    user: process.env.PG_DATABASE_USER,
    password: process.env.PG_DATABASE_PASSWORD,
    database: process.env.PG_DATABASE_NAME,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PostgresAdapter(pool),
    session: {strategy: "jwt"},
    ...authConfig
})

