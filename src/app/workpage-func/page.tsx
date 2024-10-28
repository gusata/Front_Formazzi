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

      <div className="flex h-screen">
        <Navbar role="func"/>

        {/* Seção Principal */}
        <main className="w-3/4 bg-white p-8">
          {/* Banner */}
          <div className="w-full bg-purple-600 h-40 rounded-xl mb-8 relative flex items-center justify-center">
            <h1 className="text-2xl text-white font-semibold">Seja Bem Vindo à Formazzi</h1>
          </div>

          {/* Conteúdo */}
          <div className="grid grid-cols-2 gap-8">
            {/* Coluna Esquerda: Continuar */}
            <div className="bg-gray-100 p-6 rounded-xl h-[30rem]"> {/* Aumentar altura */}
              <h2 className="text-xl font-semibold mb-4">Continuar</h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Programação</span>
                  <Link href="/programacao" className="text-blue-500 text-2xl"> {/* Aumentar tamanho da seta */}
                    →
                  </Link>
                </li>
                <li className="flex justify-between items-center">
                  <span>Como se comportar no mercado de trabalho</span>
                  <Link href="/trabalho" className="text-blue-500 text-2xl"> {/* Redireciona para trabalho.tsx */}
                    →
                  </Link>
                </li>
                <li className="flex justify-between items-center">
                  <span>Inglês</span>
                  <Link href="/ingles" className="text-blue-500 text-2xl"> {/* Aumentar tamanho da seta */}
                    →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna Direita: Meu Desempenho */}
            <div className="bg-gray-100 p-6 rounded-xl h-[30rem]"> {/* Aumentar altura */}
              <h2 className="text-xl font-semibold mb-4">Meu Desempenho</h2>
              <div className="flex justify-between items-end h-full"> {/* Ajustar altura */}
                {/* Gráfico de barras com cores destacadas */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-48 rounded-t-md" style={{ backgroundColor: "#FFD700" }}></div>
                  <span className="text-sm mt-2">Comunicação (56%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-56 rounded-t-md" style={{ backgroundColor: "#FF6347" }}></div>
                  <span className="text-sm mt-2">Inglês (60%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-16 rounded-t-md" style={{ backgroundColor: "#32CD32" }}></div>
                  <span className="text-sm mt-2">JavaScript (22%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-80 rounded-t-md" style={{ backgroundColor: "#8A2BE2" }}></div>
                  <span className="text-sm mt-2">Soft Skills (84%)</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
