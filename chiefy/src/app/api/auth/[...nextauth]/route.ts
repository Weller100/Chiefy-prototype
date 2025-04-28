import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile phone",
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "email,public_profile,user_location",
        },
      },
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "r_emailaddress r_liteprofile r_basicprofile",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email) return false;

      try {
        // Update or create user with additional data
        await prisma.user.upsert({
          where: { email: user.email },
          create: {
            email: user.email,
            name: user.name,
            image: user.image,
            phoneNumber: (profile as any)?.phone_number,
            location: (profile as any)?.location?.name || (profile as any)?.address?.locality,
            company: (profile as any)?.company || (profile as any)?.organizations?.[0]?.name,
            role: (profile as any)?.headline || (profile as any)?.position,
          },
          update: {
            name: user.name,
            image: user.image,
            phoneNumber: (profile as any)?.phone_number || undefined,
            location: (profile as any)?.location?.name || (profile as any)?.address?.locality || undefined,
            company: (profile as any)?.company || (profile as any)?.organizations?.[0]?.name || undefined,
            role: (profile as any)?.headline || (profile as any)?.position || undefined,
          },
        });
        return true;
      } catch (error) {
        console.error("Error updating user data:", error);
        return true; // Still allow sign in even if additional data collection fails
      }
    },
    async session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST }; 