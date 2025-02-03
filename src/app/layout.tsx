import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
import Navbar from "@/components/navbar";


const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "Template by Anurag",
  description: "github- https://github.com/justanuragmaurya",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Providers session={session}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
