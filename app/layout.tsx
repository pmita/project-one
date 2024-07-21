import type { Metadata } from "next";
import { roboto, poppins } from "@/config/fonts";
import "./globals.css";

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
      <body className={`${roboto.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
