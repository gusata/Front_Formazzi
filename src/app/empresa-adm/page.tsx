'use client'
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../components/barra lateral/nav";

export default function ViewCompanyAdmin() {
  const [company, setCompany] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  useEffect(() => {
    const storedCompany = JSON.parse(localStorage.getItem("company"));
    setCompany(storedCompany);

    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedCompany = { ...company, coverImage: reader.result };
      setCompany(updatedCompany);
      localStorage.setItem("company", JSON.stringify(updatedCompany));
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteCompany = () => {
    localStorage.removeItem("company");
    setCompany(null);
    alert("Empresa excluída com sucesso!");
  };

  const handleAddEmployee = () => {
    if (selectedEmployee && company) {
      const updatedCompany = { ...company, employees: [...company.employees, selectedEmployee] };
      setCompany(updatedCompany);
      localStorage.setItem("company", JSON.stringify(updatedCompany));
      setSelectedEmployee("");
    }
  };

  const handleRemoveEmployee = (employeeName) => {
    const updatedEmployees = company.employees.filter(emp => emp !== employeeName);
    const updatedCompany = { ...company, employees: updatedEmployees };
    setCompany(updatedCompany);
    localStorage.setItem("company", JSON.stringify(updatedCompany));
  };

  return (
    <div>
        <Navbar role="adm"/>
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {company ? (
        <>
          {/* Imagem de Capa */}
          {company.coverImage && (
            <div className="w-full flex justify-center mb-6 ">
              <img
                src={company.coverImage}
                alt="Capa da Empresa"
                className="w-full max-w-5xl h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

              <input
                type="file"
                onChange={handleCoverUpload}
                className="absolute top-2 right-2 max-w-24 bg-white p-2 rounded cursor-pointer opacity-0"
                
              />
              <button
                className=" absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded shadow"
                onClick={() => document.querySelector('input[type="file"]').click()}
              >
                Editar Capa
              </button>
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

          {/* Botão para Excluir Empresa */}
          <button onClick={handleDeleteCompany} className="bg-red-500 text-white px-4 py-2 rounded-lg mb-6">
            Excluir Empresa
          </button>

          {/* Container de Funcionários */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <h2 className="text-xl font-bold mb-4">Funcionários</h2>
            <ul className="list-disc list-inside mb-4">
              {company.employees.map((emp, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{emp}</span>
                  <button
                    onClick={() => handleRemoveEmployee(emp)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            {/* Atribuir Funcionário */}
            <select
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
              className="mt-2 mb-4 p-2 border border-gray-300 rounded w-full max-w-md"
            >
              <option value="">Selecione um funcionário</option>
              {employees.map((employee, index) => (
                <option key={index} value={employee.name}>
                  {employee.name}
                </option>
              ))}
            </select>
            <button onClick={handleAddEmployee} className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Atribuir Funcionário
            </button>
          </div>
        </>
      ) : (
        <div className="flex  gap-4 items-center justify-center m-4 ">
  <p className="text-gray-500">Nenhuma empresa criada.</p>
  <Link href="/create-empresa-adm">
  <button className="bg-violet-600 hover:bg-violet-700 text-yellow-50 rounded-full p-2">
    <Plus />
  </button>
  </Link>
</div>

      )}
    </div>
    </div>
  );
}
