import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ResponsiveBar from "./components/ResponsiveBar";

const sora = Sora({
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={sora.className}>
        <Navbar/>
        <ResponsiveBar/>
        <div className="pt-[20vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
