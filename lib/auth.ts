import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  }),
]

export const authOptions: NextAuthOptions = {
  providers,
  pages: {
    signIn: '/signin',
  },
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === 'google') {
        token.provider = 'google'
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        ;(session as any).provider = (token as any).provider
      }
      return session
    },
  },
}

// Helper to satisfy both Pages and App Router
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
