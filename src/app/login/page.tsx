"use client";

import logo from "@/public/intro.png";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "@/public/seta.png";
import React from "react";

export default function Login() {
    function changevisiformadm(){
        let formadm = document.getElementById('form-adm');
        let formfunc = document.getElementById('form-func');
        formadm?.classList.toggle('hidden');
        formfunc?.classList.toggle('hidden');
    }

    return (
        <main>
            <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen">
                {/* Seta no canto superior esquerdo */}
                <Link href="/" passHref>
                    <Image
                        src={arrowIcon}
                        alt="Voltar"
                        className="absolute top-4 left-4 h-6 w-10 cursor-pointer hover:opacity-80 transition-opacity md:top-8 md:left-6 md:h-8 md:w-14"
                    />
                </Link>

                {/* Logo e formulário lado a lado em telas maiores */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full md:h-screen md:w-1/2 bg-grey-100 p-6 md:p-0">
                    <Image src={logo} alt="logo" className="h-96 hidden w-auto mb-4 md:hidden sm:hidden lg:block" />
                </div>
                
                <div className="flex items-center justify-center bg-primary w-full md:w-1/2 p-4 md:p-12 h-full md:h-screen">
                    {/* Contêiner do formulário com bordas arredondadas */}
                    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-lg w-full max-w-md">
                        <form className="flex items-center justify-center flex-col gap-6 md:gap-8" id="form-func">
                            {/* Título do formulário */}
                            <div className="text font-crimson text-xl md:text-2xl font-bold tracking-wide mb-4">
                                Login Funcionário
                            </div>

                            {/* Campos de entrada */}
                            <input
                                type="email"
                                placeholder="Qual seu E-mail?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Qual a sua senha?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required
                            />

                            {/* Botão de envio */}
                            <Link href={"/workpage-func"}>
                                <button type="submit" className="bg-[#A38DEB] border-2 border-registerbt h-9 w-[10rem] rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition">
                                    Entrar
                                </button>
                            </Link>

                            {/* Link para alternar para administrador */}
                            <button type="button" onClick={changevisiformadm} className="text font-crimson text-sm text-blue-500 hover:underline" id="change">
                                É um administrador? Clique aqui!
                            </button>
                        </form>

                        <form className="flex items-center justify-center flex-col gap-6 md:gap-8 hidden" id="form-adm">
                            {/* Título do formulário */}
                            <div className="text font-crimson text-xl md:text-2xl font-bold tracking-wide mb-4">
                                Login Administrador
                            </div>

                            {/* Campos de entrada */}
                            <input
                                type="email"
                                placeholder="Qual seu E-mail?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Qual a sua senha?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required
                            />

                            {/* Botão de envio */}
                            <button type="submit" className="bg-[#A38DEB] border-2 border-registerbt h-9 w-[10rem] rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition">
                                Entrar
                            </button>

                            {/* Link para alternar para funcionário */}
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
