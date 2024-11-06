import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/barra lateral/nav";
import { Alert, Dropdown } from "flowbite-react";

export default function Dashboard() {
  return (
    <div className="z-10 font-sans h-screen bg-gradient-to-r from-purple-100 via-purple-50 to-purple-200">
      {/* Adicionando a fonte Lusitana no projeto */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex h-full flex-col lg:flex-row">
        {/* Barra lateral */}
        <Navbar role="adm" />

        {/* Seção Principal */}
        <main className="w-full flex flex-col items-center bg-white p-4 md:p-6 lg:p-8">

          <div className="flex flex-col lg:flex-row w-full lg:w-11/12 gap-4">
            {/* Enviar Aviso Geral */}
            <div className="bg-gray-100 p-4 rounded-xl flex-grow mb-4 lg:mb-0">
              <h2 className="text-md md:text-lg font-semibold mb-2 md:mb-4">Enviar Aviso Geral</h2>
              <div className="relative mb-4">
                <textarea
                  className="w-full h-60 p-3 rounded-md border  border-gray-300 resize-none "
                  placeholder="Digite aqui sua mensagem"
                />
                <button className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-1 rounded-md text-sm md:text-base">
                  Enviar
                </button>
              </div>
            </div>

            {/* Funcionários */}
            <div className="bg-gray-100 p-4 rounded-xl lg:w-1/4 w-full">
              <h2 className="text-md md:text-lg font-semibold mb-2 md:mb-4">Funcionários</h2>
              <ul className="space-y-3">
                {[
                  { nome: "Marcos Beltrame", nivel: "Designer" },
                  { nome: "Elon mustard", nivel: "Auxiliar Jurídico" },
                  { nome: "Martin Luther", nivel: "Direitos Humanos" },
                  { nome: "Luís Inácio", nivel: "Faz o L" },
                  { nome: "Greethen", nivel: "RH" },
                ].map((funcionario, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <span className="text-sm md:text-base">{funcionario.nome}</span>
                    </div>
                    <span className="text-xs text-gray-500">{funcionario.nivel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Progressão Geral */}
          <div className="w-full lg:w-11/12 bg-gray-100 mt-4 lg:mt-6 p-4 md:p-6 rounded-xl">
            <h2 className="text-md md:text-lg font-semibold mb-2 md:mb-4">
              Progressão Geral - Taxa de conclusão
            </h2>
            <div className="space-y-3">
              {[
                { nome: "Programação", cor: "bg-red-400", progresso: "w-2/5", valor: "2/5" },
                { nome: "Como se comportar no ambiente de trabalho", cor: "bg-orange-400", progresso: "w-3/5", valor: "3/5" },
                { nome: "JavaScript", cor: "bg-yellow-300", progresso: "w-4/5", valor: "4/5" },
                { nome: "Inglês", cor: "bg-blue-400", progresso: "w-1/5", valor: "1/5" },
                { nome: "Marketing", cor: "bg-pink-400", progresso: "w-1/5", valor: "1/5" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className={`h-4 rounded-full ${item.cor} ${item.progresso}`} />
                  <span className="text-xs md:text-sm flex-grow">{item.nome}</span>
                  <span className="text-xs md:text-sm text-gray-500">{item.valor}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
