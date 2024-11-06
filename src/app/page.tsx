import Image from "next/image";
import intro from "@/public/intro.png";
import logo from "@/public/logo.svg";
import foguete from "@/public/foguete.png";

import FlareCursor from "./components/cursor/cursor";
import Link from "next/link";


export default function Home() {
  return (
    <main className={''} id="content">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <nav className="bg-yellow-50 border-b-2  border-primary">
        <div className="mx-4 px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Image src={logo} alt="logo" className="size-[13rem] mb-[0.5rem] sm:size-[8rem] md:size-[8rem]" />
            <div className="flex items-center space-x-4">
              <Link href={"/register"}>
                <button className="bg-transparent border-2 border-registerbt h-9 w-24 rounded-full font-crimson font-semibold text-lg text-registerbt active:bg-registerbt active:text-yellow-50 transition">
                  Registre-se
                </button>
              </Link>
              <Link href={"/login"}>
                <button className="bg-registerbt border-2 border-registerbt h-9 w-24 rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="content min-w-screen flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth" id="main">
        <div className="snap-end flex flex-col md:flex-row items-center justify-between mx-6 md:mx-10 lg:mx-32 min-h-screen h-screen relative">
          <div className="flex flex-col gap-8 text-center md:text-left">
            <h1 className="font-crimson font-bold text-4xl md:text-5xl text-formazzi w-full md:w-[40rem]">
              Seja bem vindo!
            </h1>
            <div className="w-full md:w-[35rem]">
              <p className="font-crimson font-bold text-xl md:text-2xl text-formazzi">
                Acreditamos que investir no desenvolvimento dos nossos funcionários é investir no futuro da empresa.
              </p>
              <p className="font-crimson text-xl md:text-2xl text-formazzi">
                É por isso que estamos comprometidos em proporcionar
              </p>
              <p className="font-crimson font-bold text-xl md:text-2xl text-fontIntro">
                cursos de qualidade para os novos membros das equipes.
              </p>
            </div>
          </div>
          <Image src={intro} alt="intro" className="hidden sm:block h-[300px] md:h-[450px] w-auto" />
          <footer className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 font-crimson font-bold text-lg md:text-xl text-formazzi" id="txt">
            Tente usar as setas
          </footer>
        </div>

        <div className="snap-start flex flex-col md:flex-row items-center justify-between mx-6 md:mx-10 lg:mx-32 min-h-screen h-screen relative">
          <div className="flex flex-col gap-8 z-10 md:absolute top-24 left-0 text-center md:text-left">
            <h1 className="font-crimson font-bold text-4xl md:text-5xl text-formazzi w-full md:w-[40rem]">
              Primeiros Passos
            </h1>
            <div className="w-full md:w-[35rem]">
              <p className="font-crimson font-bold text-2xl md:text-3xl text-formazzi">
                Entendemos que os primeiros passos em uma nova empresa podem ser desafiadores,
              </p>
              <p className="font-crimson text-2xl md:text-3xl text-formazzi">
                e é por isso que estamos aqui para apoiá-lo em cada etapa do seu crescimento profissional. Nossos cursos são cuidadosamente projetados para equipá-lo com as
              </p>
              <p className="font-crimson font-bold text-2xl md:text-3xl text-fontIntro">
                habilidades necessárias para ter sucesso em sua função e contribuir para o sucesso da equipe.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 z-10 md:absolute bottom-24 right-0 text-center md:text-right">
            <div className="w-full md:w-[35rem]">
              <p className="font-crimson font-bold text-2xl md:text-3xl text-formazzi">
                Junte-se a nós nesta jornada emocionante rumo ao sucesso profissional.
              </p>
              <p className="font-crimson text-2xl md:text-3xl text-formazzi">
                Na Formazzi,
              </p>
              <p className="font-crimson font-bold text-2xl md:text-3xl text-fontIntro">
                o seu futuro é importante para nós.
              </p>
            </div>
          </div>

          <Image src={foguete} alt="foguete" className="absolute z-0 bottom-0 left-0 lg:visible invisible " id="foguete" />
        </div>
      </div>
      <FlareCursor />
    </main>
  );
}
