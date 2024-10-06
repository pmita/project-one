import { Roboto, Poppins } from "next/font/google";

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

export { roboto, poppins };