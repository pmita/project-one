import type { Metadata } from "next";
import { Roboto, Poppins, Fira_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira-sans",
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Help next door",
  description: "Your friendly neighbourhood handy person to help you with your daily chores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} ${firaSans.variable}`}>{children}</body>
    </html>
  );
}
