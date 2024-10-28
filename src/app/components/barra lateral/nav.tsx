"use client"
import Link from "next/link"
import Image from "next/image"

import { ArrowLeft, Home, MessageCircle, LandPlot, Building2, BookOpenCheck, ThumbsUp, } from "lucide-react"


interface NavbarProps {
  role: 'adm' | 'func'; // Define as opções de role: 'adm' ou 'func'
}

export default function Navbar({ role }: NavbarProps){



  // Função que muda os links com base no role
  const getNavigationLinks = () => {
    if (role === 'adm') {
      return [
        { label: 'Início', path: '/workpage-adm', icon: '/house.png' },
        { label: 'Usuários', path: '/admin-users', icon: '/users.png' },
        { label: 'Configurações', path: '/admin-settings', icon: '/settings.png' },
      ];
    } else {
      return [
        { label: 'Início', path: '/workpage-func', icon: '/house.png' },
        { label: 'Meus Cursos', path: '/cursos', icon: '/curso.png' },
        { label: 'Certificados', path: '/certificados', icon: '/cfuncionario.png' },
      ];
    }
  };

  const navigationLinks = getNavigationLinks();

        return(
    <aside className="w-1/4 bg-gray-200 p-6 flex flex-col justify-between">
          <div>
            {/* Container do título com botão e logo */}
            <div className="flex justify-between items-center mb-6">
              {/* Botão com a imagem "seta.png" */}
              <button className="p-2 rounded-full">
                <ArrowLeft/>
              </button>

              {/* Título da empresa */}
              <h1
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: "Lusitana, serif" }}
              >
                Formazzi
              </h1>

            
              
            </div>

            {/* Perfil */}
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="@/public/marcos.png"
                alt="User"
                width={100}
                height={100}
                className="rounded-full border-2  border-white w-16 h-16"
              />
              <div>
                <h2 className="text-lg font-bold text-black">Marcos Ibrahimović</h2>
                <p className="text-sm text-gray-500">marcos@exemplo.com</p>
              </div>
            </div>

            {/* Navegação */}
            <nav className="space-y-4">
            <Link href={""} className="block py-2 px-4 hover:bg-gray-400 text-black rounded-lg flex justify-between items-center">
                Início
                <Home/>
             </Link>
            
             <Link href="/cursos" className="block py-2 px-4 hover:bg-gray-400 text-black rounded-lg flex justify-between items-center">
                {/* Link de "Chats" com imagem à direita */}
                Chats
                <MessageCircle/>
              </Link>

              <Link href="/cursos" className="block py-2 px-4 hover:bg-gray-400 text-black rounded-lg flex justify-between items-center">
                Meus Cursos
                <LandPlot/>
              </Link>

              <Link href="#" className="block py-2 px-4 hover:bg-gray-400 text-black rounded-lg flex justify-between items-center">
                (Empresa)
               <Building2/>
              </Link>

              <Link href="/certificados" className="block py-2 px-4 hover:bg-gray-400 text-black rounded-lg flex justify-between items-center">
                Certificados
               <BookOpenCheck/>
              </Link>

              <Link href="/recomendacao" className="block py-2 px-4 hover:bg-gray-400 text-black rounded-lg flex justify-between items-center">
                Recomendações
                <ThumbsUp/>
              </Link>

              <Link href="/boasvindas" className="block py-2 px-4 hover:bg-gray-400 text-black rounded-lg">
                Sair
              </Link>
            </nav>
          </div>
        </aside>
          

)}