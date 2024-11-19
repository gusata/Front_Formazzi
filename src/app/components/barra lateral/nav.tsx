'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import marcos from "@/public/person icon.png";
import { ArrowLeft, Home, MessageCircle, LandPlot, Building2, BookOpenCheck, ThumbsUp, Menu } from "lucide-react";

interface NavbarProps {
  role: 'adm' | 'func';
}

export default function Navbar({ role }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getNavigationLinks = () => {
    if (role === 'adm') {
      return [
        { label: 'Início', path: '/workpage-adm', icon: <Home /> },
        { label: 'Chats', path: '/chats', icon: <MessageCircle /> },
        { label: 'Meus Cursos', path: '/couses', icon: <LandPlot /> },
        { label: 'Funcionários', path: '/list-func', icon: <Building2 /> },
        { label: 'Certificados', path: '/', icon: <BookOpenCheck /> },
        { label: 'Recomendações', path: '/recomendacao', icon: <ThumbsUp /> },
        { label: 'Empresa', path: '/empresa-adm', icon: <Building2 /> },
      ];
    } else {
      return [
        { label: 'Início', path: '/workpage-func', icon: <Home /> },
        { label: 'Chats', path: '/chats', icon: <MessageCircle /> },
        { label: 'Meus Cursos', path: '/couses-func', icon: <LandPlot /> },
        { label: 'Empresa', path: '/empresa-func', icon: <Building2 /> },
        { label: 'Certificados', path: '/certificados', icon: <BookOpenCheck /> },
        { label: 'Recomendações', path: '/recomendacao', icon: <ThumbsUp /> },
      ];
    }
  };

  const navigationLinks = getNavigationLinks();

  return (

      

        <div className="fixed h-full z-50">
          {/* Botão de Menu */}
          <button
            className={`m-5 p-2 rounded-full focus:outline-none transition-all bg-slate-200 opacity-70 hover:opacity-100  ${isOpen ? 'z-40 hidden' : 'z-50'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="text-gray-800" /> 
            
        
          </button>

          {/* Barra lateral */}
          <aside
          
            className={`fixed transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } z-50 bg-white/50 backdrop-blur-xl p-6 flex flex-col justify-between w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-full`}
          >
            <div>
              {/* Título e Fechar Menu */}
              <div className="flex justify-between items-center mb-6">
                <button className="p-2 rounded-full" onClick={() => setIsOpen(false)}>
                  <ArrowLeft />
                </button>
                <h1 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "Lusitana, serif" }}>
                  Formazzi
                </h1>
              </div>

              {/* Perfil */}
              <div className="flex items-center gap-4 mb-8">
                <Image src={marcos} alt="logo" className="rounded-full border-2 border-slate-700 w-12 h-12" />
                <div>
                  <h2 className="text-lg font-bold text-formazzi">
                    {role === 'adm' ? 'Marcos Ibrahimović' : 'Gustavo'}
                  </h2>
                  <p className="text-sm text-gray-500">{role === 'adm' ? 'marcos@gmail.com' : 'gustavosgaleazzi@gmail.com'}</p>
                </div>
              </div>

              {/* Navegação */}
              <nav className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="py-2 px-4 hover:bg-registerbt text-black rounded-lg flex justify-between items-center"
                  >
                    {link.label}
                    {link.icon}
                  </Link>
                ))}
                <Link href="/" className="block py-2 px-4 hover:bg-gray-400 text-black rounded-lg">
                  Sair
                </Link>
              </nav>
            </div>
          </aside>

          {/* Overlay para fechar o menu em qualquer tamanho de tela */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black opacity-0 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
  );
}
