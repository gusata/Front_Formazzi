'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/barra lateral/nav";

export default function ViewCompanyEmployee() {
  const [company, setCompany] = useState(null);
  const [employee, setEmployee] = useState("Gustavo"); // Exemplo de usuário logado (nome estático)

  useEffect(() => {
    const storedCompany = JSON.parse(localStorage.getItem("company"));
    if (storedCompany && storedCompany.employees.includes(employee)) {
      setCompany(storedCompany);
    }
  }, [employee]);

  return (
    <div>
        <Navbar role="func"/>
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {company ? (
        <>
          {/* Imagem de Capa */}
          {company.coverImage && (
            <div className="w-full flex justify-center mb-6">
              <img
                src={company.coverImage}
                alt="Capa da Empresa"
                className="w-full max-w-5xl h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
          
          {/* Informações da Empresa */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mb-6">
            <h1 className="text-3xl font-bold mb-4">{company.name}</h1>
            <p className="text-lg mb-4">{company.description}</p>
            <p><strong>CNPJ:</strong> {company.cnpj}</p>
            <p><strong>Endereço:</strong> {company.address}</p>
            <p><strong>Telefone:</strong> {company.phone}</p>
            <p><strong>Email:</strong> {company.email}</p>
            <p><strong>Site:</strong> {company.website}</p>
            <p><strong>Setor:</strong> {company.sector}</p>
            <p><strong>Tamanho:</strong> {company.size}</p>
            <p><strong>Ano de Fundação:</strong> {company.foundationYear}</p>
            <p><strong>Tipo de Empresa:</strong> {company.type}</p>
            <p><strong>Horário de Funcionamento:</strong> {company.workingHours}</p>
            <p><strong>Slogan:</strong> {company.slogan}</p>
            <p><strong>Serviços/Produtos:</strong> {company.services}</p>
            <div className="flex space-x-4 mt-4">
              <a href={company.socialLinks.linkedin} target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href={company.socialLinks.facebook} target="_blank" className="text-blue-600 hover:underline">Facebook</a>
              <a href={company.socialLinks.instagram} target="_blank" className="text-blue-600 hover:underline">Instagram</a>
            </div>
          </div>

          {/* Container de Funcionários */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <h2 className="text-xl font-bold mb-4">Funcionários</h2>
            <ul className="list-disc list-inside">
              {company.employees.map((emp, index) => (
                <li key={index}>{emp}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Você ainda não está atribuído a uma empresa.</p>
      )}
    </div>
    </div>
  );
}
