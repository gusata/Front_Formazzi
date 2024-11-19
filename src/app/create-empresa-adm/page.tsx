'use client'
import { useState } from "react";
import Navbar from "../components/barra lateral/nav";

export default function CreateCompany() {
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyCNPJ, setCompanyCNPJ] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [companyState, setCompanyState] = useState("");
  const [companyCountry, setCompanyCountry] = useState("");
  const [companyZipCode, setCompanyZipCode] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companySector, setCompanySector] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyCover, setCompanyCover] = useState(null);
  const [companySocialLinks, setCompanySocialLinks] = useState({
    linkedin: "",
    facebook: "",
    instagram: "",
  });
  const [companyFoundationYear, setCompanyFoundationYear] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [companyWorkingHours, setCompanyWorkingHours] = useState("");
  const [companyServices, setCompanyServices] = useState("");
  const [companySlogan, setCompanySlogan] = useState("");

  const handleFileUpload = (e, setter) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setter(reader.result);
    reader.readAsDataURL(file);
  };

  const handleCreateCompany = () => {
    const newCompany = {
      name: companyName,
      description: companyDescription,
      cnpj: companyCNPJ,
      address: `${companyAddress}, ${companyCity}, ${companyState}, ${companyCountry}, ${companyZipCode}`,
      phone: companyPhone,
      email: companyEmail,
      website: companyWebsite,
      sector: companySector,
      size: companySize,
      logo: companyLogo,
      coverImage: companyCover,
      socialLinks: companySocialLinks,
      foundationYear: companyFoundationYear,
      type: companyType,
      workingHours: companyWorkingHours,
      services: companyServices,
      slogan: companySlogan,
      employees: [],
    };
    localStorage.setItem("company", JSON.stringify(newCompany));
    alert("Empresa criada com sucesso!");
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <Navbar role="adm" />
      <div className="flex flex-col items-center py-10 px-4">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">Criar Empresa</h1>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Nome da Empresa"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Descrição da Empresa"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="CNPJ"
              value={companyCNPJ}
              onChange={(e) => setCompanyCNPJ(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Endereço"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Cidade"
                value={companyCity}
                onChange={(e) => setCompanyCity(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Estado"
                value={companyState}
                onChange={(e) => setCompanyState(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="País"
                value={companyCountry}
                onChange={(e) => setCompanyCountry(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="CEP"
                value={companyZipCode}
                onChange={(e) => setCompanyZipCode(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="tel"
              placeholder="Telefone"
              value={companyPhone}
              onChange={(e) => setCompanyPhone(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="E-mail Comercial"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="url"
              placeholder="Site"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Setor"
              value={companySector}
              onChange={(e) => setCompanySector(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Tamanho (ex.: 10-50 funcionários)"
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Logo da Empresa</label>
              <input type="file" onChange={(e) => handleFileUpload(e, setCompanyLogo)} className="p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Capa da Empresa</label>
              <input type="file" onChange={(e) => handleFileUpload(e, setCompanyCover)} className="p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Redes Sociais</label>
              <input
                type="url"
                placeholder="LinkedIn"
                value={companySocialLinks.linkedin}
                onChange={(e) => setCompanySocialLinks({ ...companySocialLinks, linkedin: e.target.value })}
                className="mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="url"
                placeholder="Facebook"
                value={companySocialLinks.facebook}
                onChange={(e) => setCompanySocialLinks({ ...companySocialLinks, facebook: e.target.value })}
                className="mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="url"
                placeholder="Instagram"
                value={companySocialLinks.instagram}
                onChange={(e) => setCompanySocialLinks({ ...companySocialLinks, instagram: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="number"
              placeholder="Ano de Fundação"
              value={companyFoundationYear}
              onChange={(e) => setCompanyFoundationYear(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Tipo de Empresa (ex.: Privada)"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Horário de Funcionamento"
              value={companyWorkingHours}
              onChange={(e) => setCompanyWorkingHours(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Serviços/Produtos Oferecidos"
              value={companyServices}
              onChange={(e) => setCompanyServices(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Slogan"
              value={companySlogan}
              onChange={(e) => setCompanySlogan(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button onClick={handleCreateCompany} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Criar Empresa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
