import { Anton, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const mono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${mono.variable}`}>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
