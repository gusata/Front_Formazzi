'use client'
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/barra lateral/nav";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")!) || [];
    setEmployees(storedEmployees);

    const storedCourses = JSON.parse(localStorage.getItem("courses")!) || [];
    setCourses(storedCourses);
  }, []);

  return (
    <div>
      <Navbar role="adm" />
      <div className="z-10 font-sans h-screen bg-yellow-50">
        
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="flex h-full flex-col text-formazzi lg:flex-row">
          <main className="w-full flex flex-col items-center bg-yellow-50 p-4 md:p-6 lg:p-8">

            <div className="flex flex-col lg:flex-row w-full lg:w-11/12 gap-4">
              {/* Enviar Aviso Geral */}
              <div className="bg-white p-4 rounded-xl flex-grow mb-4 lg:mb-0">
                <h2 className="text-md md:text-lg font-semibold mb-2 md:mb-4">Enviar Aviso Geral</h2>
                <button className=" p-1 mb-1 rounded-lg justify-center w-20  bg-[#A38DEB] ">
                  Enviar
                </button>
                <div>
                  <textarea
                    className="w-full inset-0 h-60 p-3 rounded-md border border-gray-300 resize-none"
                    placeholder="Digite aqui sua mensagem"
                  />
                </div>
              </div>

              {/* Funcionários */}
              <div className="bg-white p-4 rounded-xl lg:w-1/4 w-full">
                <h2 className="text-md md:text-lg font-semibold mb-2 md:mb-4">Funcionários</h2>
                <ul className="space-y-3">
                  {employees.length > 0 ? (
                    employees.map((employee, idx) => (
                      <li
                        key={employee.id || idx}
                        className="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <span className="text-sm md:text-base">{employee.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{employee.position}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">Nenhum funcionário encontrado.</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Progressão Geral */}
            <div className="w-full lg:w-11/12 bg-white mt-4 lg:mt-6 p-4 md:p-6 rounded-xl">
              <h2 className="text-md md:text-lg font-semibold mb-2 md:mb-4">
                Progressão Geral - Taxa de conclusão
              </h2>
              <div className="space-y-3">
                {courses.length > 0 ? (
                  courses.map((course, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="text-sm md:text-base flex-grow">{course.title}</div>
                      <div className="h-4 bg-gray-200 rounded-full w-2/5">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs md:text-sm text-gray-500">
                        {course.progress}%
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Nenhum curso encontrado.</p>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
