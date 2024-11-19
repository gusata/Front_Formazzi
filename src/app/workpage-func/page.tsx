'use client'
// pages/dashboard.js
import { useEffect, useState } from "react";
import Navbar from "../components/barra lateral/nav";
import Head from "next/head";
import Link from "next/link";
import wallpaper2 from "@/public/wallpaper2.png"


export default function Dashboard() {
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")!) || [];
    const employeeName = "Gustavo"; // Nome do funcionário autenticado
    const filteredCourses = storedCourses.filter((course) => course.assignedEmployees?.includes(employeeName));
    setAssignedCourses(filteredCourses);

    // Carregar dados da empresa atribuída ao funcionário
    const storedCompany = JSON.parse(localStorage.getItem("company"));
    if (storedCompany && storedCompany.employees.includes(employeeName)) {
      setCompany(storedCompany);
    }
  }, []);

  return (
    <div >
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col bg- bg-center   lg:flex-row h-screen"
        style={{ 
          backgroundImage: `url(${wallpaper2.src})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          
        
        }}>
        <Navbar role="func" />
        <main className="justify-center w-full bg-transparent p-4 lg:p-8">
          {/* Banner de Capa da Empresa */}
          {company?.coverImage ? (
            <div
              className=" inset-0 w-full h-32 lg:h-40 rounded-xl mb-6 lg:mb-8 flex items-center justify-center bg- bg-center "
              style={{ backgroundImage: `url(${company.coverImage})` }}
            >
              <h1 className="text-2xl lg:text-8xl text-gray-950  font-bold   px-4 py-2 rounded-md">
                {company.name}
              </h1>
            </div>
          ) : (
            <div className="w-full bg-purple-600 h-32 lg:h-40 rounded-xl mb-6 lg:mb-8 flex items-center justify-center">
              <p className="text-white text-lg lg:text-xl">Bem-vindo(a) à Formazzi!</p>
            </div>
          )}

          <div className="flex gap-4 lg:gap-8">
            {/* Meus Cursos */}
            <div className="bg-white/50 border shadow-xl border-slate-100 backdrop-blur-md  z-10 p-4 lg:p-6 rounded-xl w-96 lg:col-span-2">
              <div className="flex flex-col">
                <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">Meus Cursos</h2>
                <Link href="/couses-func" className="text-blue-500 text-xl lg:text-2xl">
                  →
                </Link>
              </div>
              {assignedCourses.length === 0 ? (
                <p className="text-gray-500">Nenhum curso atribuído.</p>
              ) : (
                <ul className="space-y-3 lg:space-y-4">
                  {assignedCourses.map((course, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{course.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            

            {/* Minha Progressão */}
            <div className="w-full lg:w-11/12 shadow-xl  bg-white/50 border border-slate-100 backdrop-blur-md mt-4 lg:mt-6 p-4 md:p-6 rounded-xl">
              <h2 className="text-md md:text-lg font-semibold mb-2 md:mb-4">Minha Progressão</h2>
              <div className="space-y-3">
                {assignedCourses.length > 0 ? (
                  assignedCourses.map((course, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="text-sm md:text-base flex-grow">{course.title}</div>
                      <div className="h-4 bg-gray-200 rounded-full w-2/5">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs md:text-sm text-gray-500">{course.progress}%</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Nenhum curso encontrado.</p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
