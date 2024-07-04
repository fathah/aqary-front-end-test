import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/Nav";
import Footer from "@/components/common/Footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Application",
  description: "My Blogs Post",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="min-h-[90vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
