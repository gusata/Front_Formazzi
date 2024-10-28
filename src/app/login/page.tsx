"use client"

import logo from "@/public/intro.png";
import Image from "next/image";
import Link from "next/link"; // Corrigido o Link do Next.js
import arrowIcon from "@/public/seta.png"; // Imagem da seta
import React from "react"; // Importando React para usar os tipos




export default function Login() {

    function changevisiformadm(){
        let formadm = document.getElementById('form-adm');
        let formfunc = document.getElementById('form-func')
        formadm?.classList.toggle('hidden');
        formfunc?.classList.toggle('hidden')
    }

    
    return (
        <main>
            <div className="relative flex items-center justify-center min-h-screen">
                {/* Seta no canto superior esquerdo */}
                <Link href="/" passHref>
                    <Image
                        src={arrowIcon} // Usando a imagem importada da seta
                        alt="Voltar"
                        className="absolute top-8 left-6 h-8 w-14 cursor-pointer hover:opacity-80 transition-opacity"
                    />
                </Link>

                {/* Logo e formulário lado a lado */}
                <div className="flex items-center justify-center bg-grey-100 h-screen w-screen">
                    <Image src={logo} alt="logo" className="size-96 mb-[0.5rem]" />
                </div>
                <div className="flex items-center justify-center bg-primary h-screen w-screen">
                    {/* Contêiner do formulário com bordas arredondadas */}
                    <div className="bg-white p-12 rounded-2xl shadow-lg">
                        <form className="flex items-center justify-center flex-col gap-8"   id="form-func">
                            {/* Título do formulário com fonte aumentada e maior altura */}
                            <div className="text font-crimson text-2xl font-bold tracking-wide mb-4">
                                Login Funcionário
                            </div>

                            {/* Campos de entrada */}
                            <input
                                type="email"
                                placeholder="Qual seu E-mail?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-80 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required // Adiciona um campo obrigatório
                            />
                            <input
                                type="password"
                                placeholder="Qual a sua senha?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-80 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required // Adiciona um campo obrigatório
                            />

                            {/* Botão de envio */}
                            <Link href={"/workpage-func"}><button type="submit" className="bg-[#A38DEB] border-2 border-registerbt h-9 w-[10rem] rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition">
                                Entrar
                            </button></Link>

                            {/* Link de administrador com tamanho de fonte reduzido e sem negrito */}
                            <button type="button" onClick={changevisiformadm} className="text font-crimson text-sm text-blue-500 hover:underline" id="change">
                                É um administrador? Clique aqui!
                            </button>
                        </form>

                        <form className="flex items-center justify-center flex-col gap-8 hidden"  id="form-adm">
                            {/* Título do formulário com fonte aumentada e maior altura */}
                            <div className="text font-crimson text-2xl font-bold tracking-wide mb-4">
                                Login Administrador
                            </div>

                            {/* Campos de entrada */}
                            <input
                                type="email"
                                placeholder="Qual seu E-mail?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-80 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required // Adiciona um campo obrigatório
                            />
                            <input
                                type="password"
                                placeholder="Qual a sua senha?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-80 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required // Adiciona um campo obrigatório
                            />

                            {/* Botão de envio */}
                            <button type="submit" className="bg-[#A38DEB] border-2 border-registerbt h-9 w-[10rem] rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition">
                                Entrar
                            </button>

                            {/* Link de administrador com tamanho de fonte reduzido e sem negrito */}
                            <button type="button" onClick={changevisiformadm} className="text font-crimson text-sm text-blue-500 hover:underline" id="change">
                                É um Funcionário? Clique aqui!
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </main>
    );
}
