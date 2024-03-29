import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { urlToHttpOptions } from "url";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-spaceGrotesk'
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${roboto_mono.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
