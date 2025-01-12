import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Dock from "./components/Sidebar";

const sora = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Travis Pan Portfolio",
  description: "Travis Pan Portfolio Nextjs Typescript Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Navbar/>
        <Dock/>
        <div style={{ marginTop: "22vh" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
