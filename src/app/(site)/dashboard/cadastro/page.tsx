import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Painel - Cadastrando usuário",
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

  export default function Cadastro(){
    return(
        <div>
            <h1>Cadastrando cliente</h1>
            <p>Essa é a página de cadastro de clientes do dashboard</p>
        </div>
    )
  }