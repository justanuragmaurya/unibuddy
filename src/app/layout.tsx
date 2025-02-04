import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
import Navbar from "@/components/navbar";
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "UniBuddy",
  description: "One stop for all uni needs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Providers session={session}>
        <NextTopLoader 
        color="#ff5c00"
        height={5}
        speed={500}
         />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
