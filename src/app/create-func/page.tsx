'use client'// pages/create.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/barra lateral/nav';
import {ArrowBigLeft} from "lucide-react"
import Link from 'next/link';

export default function CreateEmployee() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');


  const handleAddEmployee = () => {
    const employees = JSON.parse(localStorage.getItem('employees')!) || [];
    const newEmployee = { id: Date.now(), name, position };
    localStorage.setItem('employees', JSON.stringify([...employees, newEmployee]));

    alert("Novo Funcionário cadastrado");
    setName("");
    setPosition("");
     // Redireciona para a página de listagem
  };

  return (
    <div>
      <Navbar role='adm'/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className='flex gap-2  '>
        <Link href="/list-func">
      <ArrowBigLeft className='size-9'/>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Cadastrar Funcionário</h1>
      </div>
      <div className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Digite o nome"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Cargo</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Digite o cargo"
          />
        </div>
        <button
          onClick={handleAddEmployee}
          className="w-full bg-[#A38DEB] hover:bg-violet-800 text-white py-2 rounded"
        >
          Adicionar Funcionário
        </button>
      </div>
    </div>
    </div>
  );
}
