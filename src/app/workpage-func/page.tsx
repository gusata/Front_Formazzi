import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/barra lateral/nav";

export default function Dashboard() {


  return (
    <div>
      {/* Adicionando a fonte Lusitana no projeto */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-col lg:flex-row h-screen">
        <Navbar role="func" />

       {/* Seção Principal */}
       <main className=" justify-center lg:w-3/4 bg-white p-4 lg:p-8 w-90">
          {/* Banner */}
          <div className="w-full bg-purple-600 h-32 lg:h-40 rounded-xl mb-6 lg:mb-8 flex items-center justify-center">
            <h1 className="text-lg lg:text-2xl text-white font-semibold text-center">
              Seja Bem Vindo à Formazzi
            </h1>
          </div>

          {/* Conteúdo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {/* Coluna Esquerda: Continuar */}
            <div className="bg-gray-100 p-4 lg:p-6 rounded-xl h-[20rem] lg:h-[30rem]">
              <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">Continuar</h2>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex justify-between items-center">
                  <span>Programação</span>
                  <Link href="/programacao" className="text-blue-500 text-xl lg:text-2xl">
                    →
                  </Link>
                </li>
                <li className="flex justify-between items-center">
                  <span>Como se comportar no mercado de trabalho</span>
                  <Link href="/trabalho" className="text-blue-500 text-xl lg:text-2xl">
                    →
                  </Link>
                </li>
                <li className="flex justify-between items-center">
                  <span>Inglês</span>
                  <Link href="/ingles" className="text-blue-500 text-xl lg:text-2xl">
                    →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna Direita: Meu Desempenho */}
            <div className="bg-gray-100 p-4 lg:p-6 rounded-xl h-[20rem] lg:h-[30rem]">
              <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">Meu Desempenho</h2>
              <div className="flex justify-between items-end h-full space-x-2 lg:space-x-4">
                {/* Gráfico de barras com cores destacadas */}
                <div className="flex flex-col items-center">
                  <div className="w-6 lg:w-10 h-32 lg:h-48 rounded-t-md" style={{ backgroundColor: "#FFD700" }}></div>
                  <span className="text-xs lg:text-sm mt-1 lg:mt-2">Comunicação (56%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 lg:w-10 h-36 lg:h-56 rounded-t-md" style={{ backgroundColor: "#FF6347" }}></div>
                  <span className="text-xs lg:text-sm mt-1 lg:mt-2">Inglês (60%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 lg:w-10 h-10 lg:h-16 rounded-t-md" style={{ backgroundColor: "#32CD32" }}></div>
                  <span className="text-xs lg:text-sm mt-1 lg:mt-2">JavaScript (22%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 lg:w-10 h-64 lg:h-80 rounded-t-md" style={{ backgroundColor: "#8A2BE2" }}></div>
                  <span className="text-xs lg:text-sm mt-1 lg:mt-2">Soft Skills (84%)</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
