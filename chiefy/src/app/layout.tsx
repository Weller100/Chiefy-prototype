import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

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
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
