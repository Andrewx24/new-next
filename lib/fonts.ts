import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Exporting the local fonts
export { geistSans, geistMono };

// Setting up the Roboto font
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

// Default export for Roboto
export default roboto;
