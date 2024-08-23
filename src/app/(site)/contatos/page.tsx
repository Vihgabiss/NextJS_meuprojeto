import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatos - Aprendendo NextJS",
  description: "Entre em contato o com sujeito programador",
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  openGraph:{
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

export default function Home() {
    return (
      <div>
        <h1>Página de contatos</h1>
        <span>(xx) 000230-2323</span>
      </div>
    );
  }