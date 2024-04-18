import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || '',
      clientSecret: process.env.NAVER_CLIENT_SECRET || '',
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      console.log('session : ', session);
      console.log('token : ', token);

      return session;
    },
    async jwt({ token, user, account }) {
      console.log('token2 :', token);
      console.log('accunt :', account);
      console.log('user : ', user);
      return token;
    },
  },
  pages: { signIn: '/auth/signin' },
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
