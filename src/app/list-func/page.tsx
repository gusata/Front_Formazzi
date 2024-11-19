'use client'
// pages/index.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/barra lateral/nav';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className='items-center justify-center'>
      <Navbar role='adm'/>
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Lista de Funcionários</h1>
      <Link href="/create-func">
        <button className="mb-4 bg- text-white py-2 px-4 rounded bg-[#A38DEB] hover:bg-violet-800   ">
          Adicionar Novo Funcionário
        </button>
      </Link>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        {employees.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum funcionário encontrado.</p>
        ) : (
          <ul>
            {employees.map((employee) => (
              <li key={employee.id} className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-medium">{employee.name}</p>
                  <p className="text-sm text-gray-500">{employee.position}</p>
                </div>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
}
