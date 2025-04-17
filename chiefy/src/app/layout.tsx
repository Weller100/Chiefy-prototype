import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Providers } from "./providers";
import ScrollButtons from '@/components/features/ScrollButtons';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chiefy - Online Learning Platform",
  description: "Track your course progress and enhance your learning journey with Chiefy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen">
            <Header />
            {children}
          </div>
        </Providers>
        <ScrollButtons />
      </body>
    </html>
  );
}
