import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import  "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./navbar/page";
import Footer from "./footer/page"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MIVS",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
            <header>
                <Navbar />
            </header>
            {children}
            <footer>
                <Footer />
            </footer>
       
      </body>
    </html>
  );
}
