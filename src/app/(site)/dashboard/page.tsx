import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Painel - Aprendendo NextJS",
    description: "Site completo para praticar nextjs com sujeito programador",
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

export default function Dashboard(){
    return(
        <div>
            <h1>Página painel</h1>
            <span>Bem vindo ao painel do site</span>
            <br/>
        </div>
    )
}