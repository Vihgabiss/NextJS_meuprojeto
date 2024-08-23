import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";



export const metadata: Metadata = {
  title: "Meu Site - Aprendendo NextJS",
  description: "Site completo para praticar nextjs com sujeito programador",
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  openGraph:{
    title: "Aprendendo Next JS com Sujeito",
    images: ['https://avatars.githubusercontent.com/u/111645925?v=4']
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
