// NEXT
import type { Metadata } from "next";
// CONTEXT
import { AuthContextProvider } from "@/context//AuthContext";
// CONFIG
import { roboto, poppins } from "@/config/fonts";
// UTILS
import { cn } from "@/utils/helpers";
// STYLES
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
      <body 
        className={cn(
          "min-h-screen bg-neutral font-roboto antialiased",
          roboto.variable,
          poppins.variable
        )}
      >
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
