import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db/prisma";
import bcrypt from "bcryptjs";
import { Profile } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account"
        }
      }
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user || !user.password) {
          throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar ?? undefined,
        };
      }
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if(user){
        console.log(user)
      }
      if (account?.provider === "google") {
        if (!profile?.email) {
          throw new Error("No profile");
        }

        await prisma.user.upsert({
          where: { email: profile.email },
          create: { 
            email: profile.email,
            name: profile.name ?? profile.email,
            avatar: (profile as GoogleProfile).picture ?? null,
          },
          update: { 
            name: profile.name ?? profile.email,
            avatar: (profile as GoogleProfile).picture ?? null,
          },
        });
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

interface GoogleProfile extends Profile {
  picture?: string;
}
