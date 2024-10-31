'use client'

import logo from "@/public/intro.png";
import Image from "next/image";
import Link from "next/link"; // Corrigido o Link do Next.js
import arrowIcon from "@/public/seta.png"; // Imagem da seta
import React, { FormEvent } from 'react';
import axios, { AxiosInstance } from 'axios';
import { error } from "console";
import { link } from "fs";
import { useRouter } from 'next/router';

export default function Login() {

    const handleClickRegister = (event: FormEvent<HTMLFormElement>) =>{
        
        event.preventDefault();
        const router = useRouter();

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

        axios.post("http://127.0.0.1:8000/adms/adms/create/", {
            id: values.id,
            nome: values.nome,
            empresa_pertencente: values.empresa_pertencente,
            id_empresa_pertencente: values.id_empresa_pertencente,
            username: values.username,
            email: values.email,
            password: values.password,

        }).then((response: any) => {
            console.log(response);
            if (response.status === 201) {
                router.push('/login');
            }
        }).catch((error: any) => {
            console.log(error);
            
            
        }) 
    }

    // Função para lidar com o envio do formulár

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
                    <div className="text font-crimson text-2xl font-bold tracking-wide mb-4">
                                Registre-se
                            </div>
                        <form onSubmit={handleClickRegister} className="flex items-center justify-center grid grid-cols-2 gap-8" >
                            {/* Título do formulário com fonte aumentada e maior altura */}
                            

                            {/* Campos de entrada */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Qual seu E-mail?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-40 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required // Adiciona um campo obrigatório
                            />
                            <input
                                type="text"
                                name="nome"
                                placeholder="Qual seu Nome?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-40 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required // Adiciona um campo obrigatório
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Qual a sua senha?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-40 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required // Adiciona um campo obrigatório
                            />

                            <input
                                type="text"
                                name="empresa_pertencente"
                                placeholder="Qual o nome da sua empresa?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-40 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required // Adiciona um campo obrigatório
                            />

                            <input
                                type="text"
                                name="id_empresa_pertencente"
                                placeholder="Qual o Id?"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-40 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                
                            />
                            <input
                                type="text"
                                name="username"
                                placeholder="crie um username"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-40 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                required // Adiciona um campo obrigatório
                            />
                            <input
                                type="text"
                                name="id"
                                placeholder="id"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-40 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                
                            />

                            {/* Botão de envio */}
                            <button type="submit" className="bg-[#A38DEB] border-2 border-registerbt h-9 w-[10rem] rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition">
                                Enviar Código
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
