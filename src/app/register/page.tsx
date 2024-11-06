'use client'

import logo from "@/public/intro.png";
import Image from "next/image";
import Link from "next/link"; 
import arrowIcon from "@/public/seta.png";
import React, { FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
    

    const HandleClickRegister = (event: FormEvent<HTMLFormElement>) => {
        const Router = useRouter();
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const values = {
            id: formData.get('id'),
            nome: formData.get('nome'),
            empresa_pertencente: formData.get('empresa_pertencente'),
            id_empresa_pertencente: formData.get('id_empresa_pertencente'),
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        };

        axios.post("http://127.0.0.1:8000/adms/adms/create/", values)
            .then((response: any) => {
                console.log(response);
                if (response.status === 201) {
                    Router.push('/login');
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

    return (
        <main>
            <div className="relative flex items-center justify-center min-h-screen px-4">
                {/* Seta no canto superior esquerdo */}
                <Link href="/" passHref>
                    <Image
                        src={arrowIcon}
                        alt="Voltar"
                        className="absolute top-4 left-4 h-6 w-10 cursor-pointer hover:opacity-80 transition-opacity md:top-8 md:left-6 md:h-8 md:w-14"
                    />
                </Link>

                {/* Container principal */}
                <div className="flex flex-col items-center justify-center w-full h-full md:flex-row md:h-screen">
                <div className="flex flex-col md:flex-row items-center justify-center w-full md:h-screen md:w-1/2 bg-grey-100 p-6 md:p-0">
                    <Image src={logo} alt="logo" className="h-96 hidden w-auto mb-4 md:hidden sm:hidden lg:block" />
                </div>
                    
                    <div className="flex items-center justify-center bg-primary w-full md:w-1/2 p-4 md:p-12 h-full md:h-screen">
                        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">
                            <div className="text-center font-crimson text-xl md:text-2xl font-bold tracking-wide mb-4">
                                Registre-se
                            </div>
                            <form onSubmit={HandleClickRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Qual seu E-mail?"
                                    className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Qual seu Nome?"
                                    className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Qual a sua senha?"
                                    className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                                <input
                                    type="text"
                                    name="empresa_pertencente"
                                    placeholder="Qual o nome da sua empresa?"
                                    className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                                <input
                                    type="text"
                                    name="id_empresa_pertencente"
                                    placeholder="Qual o Id?"
                                    className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Crie um username"
                                    className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                                <input
                                    type="text"
                                    name="id"
                                    placeholder="ID"
                                    className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                
                                {/* Botão de envio ocupa a largura total da linha */}
                                <div className="col-span-1 md:col-span-2 flex justify-center">
                                    <button type="submit" className="bg-[#A38DEB] border-2 border-registerbt h-9 w-[10rem] rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition">
                                        Enviar Código
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
