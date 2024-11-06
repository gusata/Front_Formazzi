"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import marcos from "@/public/person icon.png";
import { ArrowLeft, Home, MessageCircle, LandPlot, Building2, BookOpenCheck, ThumbsUp, Menu } from "lucide-react";

interface NavbarProps {
  role: 'adm' | 'func'; // Define as opções de role: 'adm' ou 'func'
}

export default function Navbar({ role }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false); // Controla a visibilidade do menu em telas menores
  

  // Função que muda os links com base no role
  const getNavigationLinks = () => {
    if (role === 'adm') {
      return [
        { label: 'Início', path: '/workpage-adm', icon: <Home /> },
        { label: 'Chats', path: '/chats', icon: <MessageCircle /> },
        { label: 'Meus Cursos', path: '/couses', icon: <LandPlot /> },
        { label: 'Funcionários', path: '/empresa', icon: <Building2 /> },
        { label: 'Certificados', path: '/certificados', icon: <BookOpenCheck /> },
        { label: 'Recomendações', path: '/recomendacao', icon: <ThumbsUp /> },
        { label: 'Empresa', path: '/empresa', icon: <Building2 /> },

      ];
    } else {
      return [
        { label: 'Início', path: '/workpage-func', icon: <Home /> },
        { label: 'Chats', path: '/chats', icon: <MessageCircle /> },
        { label: 'Meus Cursos', path: '/cursos', icon: <LandPlot /> },
        { label: 'Empresa', path: '/empresa', icon: <Building2 /> },
        { label: 'Certificados', path: '/certificados', icon: <BookOpenCheck /> },
        { label: 'Recomendações', path: '/recomendacao', icon: <ThumbsUp /> },
      ];
    }
  };

  const navigationLinks = getNavigationLinks();

  return (
    <div className="lg:flex lg:flex-col lg:w-1/4 h-full lg:fixed">
      {/* Botão de Menu para telas pequenas */}
      <button
        className=" m-5 focus:outline-none lg:fixed"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="text-gray-800" />
      </button>

      {/* Barra lateral */}
      <aside
        className={`fixed lg:relative z-50 bg-gray-200 p-6 flex flex-col justify-between transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-3/4 sm:w-1/2 md:w-1/3 lg:w-full h-full`}
      >
        <div>
          {/* Container do título com botão e logo */}
          <div className="flex justify-between items-center mb-6">
            {/* Botão para fechar o menu em telas pequenas */}
            <button className="p-2 rounded-full " onClick={() => setIsOpen(false)}>
              <ArrowLeft />
            </button>

            {/* Título da empresa */}
            <h1 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "Lusitana, serif" }}>
              Formazzi
            </h1>
          </div>

          {/* Perfil */}
          <div className="flex items-center gap-4 mb-8">
            <Image src={marcos} alt="logo" className="rounded-full border-2 border-slate-700 w-12 h-12" />
            <div>
              <h2 className="text-lg font-bold text-black">Marcos Ibrahimović</h2>
              <p className="text-sm text-gray-500">marcos@exemplo.com</p>
            </div>
          </div>

          {/* Navegação */}
          <nav className="space-y-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className=" py-2 px-4 hover:bg-gray-400 text-black rounded-lg flex justify-between items-center"
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

      {/* Overlay para fechar o menu em telas pequenas */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
