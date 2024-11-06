// pages/courses.js
'use client'
// pages/courses.js
import { useState, useEffect } from "react";
import { FiEdit, FiPlus, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Navbar from "../components/barra lateral/nav";
import Link from "next/link";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [expandedCourseIndex, setExpandedCourseIndex] = useState(null); // Curso expandido
  

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);
  }, []);

  const handleExpand = (index) => {
    setExpandedCourseIndex(expandedCourseIndex === index ? null : index);
  };

  const handleEditCourse = (courseIndex) => {
    // Aqui, você pode configurar a lógica de edição ou navegação para a tela de edição com base no curso selecionado.
    alert(`Função de editar curso ${courses[courseIndex].title} em desenvolvimento.`);
  };

  return (
    <div>
        <Navbar role="adm"/>
        <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Lista de Cursos</h1>

      {/* Botão para Criar Novo Curso */}
      <Link href={"/create-course"}>
      <button
        
        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-600 transition"
      >
        <FiPlus className="mr-2" /> Criar Novo Curso
      </button>
      </Link>
      

      {courses.length === 0 ? (
        <p className="text-gray-500">Nenhum curso encontrado.</p>
      ) : (
        <div className="w-full max-w-lg">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
              <div
                onClick={() => handleExpand(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <div>
                  <h2 className="text-xl font-bold">{course.title}</h2>
                  <p className="text-gray-500">{course.description}</p> {/* Exibe a descrição do curso */}
                </div>
                {expandedCourseIndex === index ? (
                  <FiChevronUp className="text-gray-600" />
                ) : (
                  <FiChevronDown className="text-gray-600" />
                )}
              </div>

              {/* Detalhes Expansíveis do Curso */}
              {expandedCourseIndex === index && (
                <div className="mt-4">
                  <p className="text-gray-700 font-semibold">Aulas:</p>
                  <ul className="list-disc list-inside mb-4">
                    {course.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="text-gray-600">
                        <strong>{lesson.title}</strong>: {lesson.content}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleEditCourse(index)}
                    className="flex items-center bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 transition"
                  >
                    <FiEdit className="mr-2" /> Editar Curso
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}
