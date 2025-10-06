import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import db from "@/lib/db"
import type { RowDataPacket } from "mysql2/promise"

interface User extends RowDataPacket {
  id: number
  email: string
  password: string
  role: "admin" | "user"
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const [rows] = await db.query<User[]>("SELECT * FROM users WHERE email = ?", [credentials.email])

          if (rows.length === 0) {
            return null
          }

          const user = rows[0]

          // Simple password comparison (in production, use bcrypt)
          if (user.password !== credentials.password) {
            return null
          }

          return {
            id: user.id.toString(),
            email: user.email,
            role: user.role,
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).id = token.id
        ;(session.user as any).role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
