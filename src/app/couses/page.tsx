// pages/courses.js
'use client'
import { useState, useEffect } from "react";
import { FiEdit, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import Navbar from "../components/barra lateral/nav";
import Link from "next/link";

// Componente Modal
// Componente Modal
function Modal({ isOpen, onClose, course, employees, onAssignEmployee, selectedEmployee, setSelectedEmployee }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative">
        
        {/* Cabeçalho fixo do modal */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-2xl font-bold">{course.title}</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl hover:text-gray-700">
            <FiX/>
          </button>
        </div>

        {/* Conteúdo com rolagem */}
        <div className="overflow-y-auto max-h-[60vh] pr-2">
          <p className="text-gray-500 mb-4">{course.description}</p>
          
          {/* Aulas */}
          <div>
            <p className="text-gray-700 font-semibold">Aulas:</p>
            <ul className="list-disc list-inside mb-4">
              {course.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex} className="text-gray-600">
                  <strong>{lesson.title}</strong>: {lesson.content}
                </li>
              ))}
            </ul>
          </div>

          {/* Prova */}
          {course.hasExam && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Prova:</h3>
              {course.examQuestions.map((question, qIndex) => (
                <div key={qIndex} className="mt-2 p-2 border border-gray-300 rounded-lg">
                  <p className="font-semibold">Pergunta {qIndex + 1}: {question.question}</p>
                  <ul className="list-disc list-inside">
                    {question.options.map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={`ml-4 ${question.correctAnswer === optionIndex ? "font-bold text-green-600" : "text-gray-600"}`}
                      >
                        {optionIndex + 1}. {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Certificado */}
          {course.certificateImage && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">Certificado:</h3>
              <img
                src={course.certificateImage}
                alt="Certificado do curso"
                className="mt-2 w-32 h-32 object-cover border rounded-lg"
              />
            </div>
          )}

          
        </div>

        {/* Atribuir Funcionário */}
        <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Atribuir Funcionário:
            </label>
            <select
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Selecione um funcionário</option>
              {employees.map((employee, empIndex) => (
                <option key={empIndex} value={employee.name}>
                  {employee.name}
                </option>
              ))}
            </select>
            <button
              onClick={onAssignEmployee}
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600 transition"
            >
              Atribuir
            </button>
          </div>
      </div>
    </div>
  );
}


export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);

    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  const handleAssignEmployee = () => {
    if (!selectedEmployee) {
      alert("Selecione um funcionário para atribuir.");
      return;
    }

    const updatedCourses = courses.map((course) => {
      if (course === selectedCourse) {
        course.assignedEmployees = course.assignedEmployees || [];
        course.assignedEmployees.push(selectedEmployee);
      }
      return course;
    });

    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setSelectedEmployee(""); // Limpar seleção após atribuição
    alert(`Funcionário atribuído ao curso: ${selectedCourse.title}`);
  };

  return (
    <div>
      <Navbar role="adm" />
      <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Lista de Cursos</h1>

        {/* Botão para Criar Novo Curso */}
        <Link href={"/create-course"}>
          <button className="flex items-center bg-[#A38DEB] hover:bg-violet-800 text-white px-4 py-2 rounded-lg mb-6 transition">
            <FiPlus className="mr-2" /> Criar Novo Curso
          </button>
        </Link>

        {courses.length === 0 ? (
          <p className="text-gray-500">Nenhum curso encontrado.</p>
        ) : (
          <div className="w-full max-w-lg">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p className="text-gray-500">{course.description}</p>
                  </div>
                  <button
                    onClick={() => openModal(course)}
                    className="text-blue-500 hover:underline"
                  >
                    Ver Detalhes
                  </button>
                </div>

                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => alert(`Função de editar curso ${course.title} em desenvolvimento.`)}
                    className="flex items-center bg-[#6db48a] hover:bg-green-800 text-white px-3 py-2 rounded-lg  transition"
                  >
                    <FiEdit className="mr-2" /> Editar Curso
                  </button>
                  <button
                    onClick={() => {
                      const updatedCourses = courses.filter((_, i) => i !== index);
                      setCourses(updatedCourses);
                      localStorage.setItem("courses", JSON.stringify(updatedCourses));
                    }}
                    className="flex items-center bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    <FiTrash2 className="mr-2" /> Excluir Curso
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Detalhes do Curso */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        course={selectedCourse}
        employees={employees}
        onAssignEmployee={handleAssignEmployee}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />
    </div>
  );
}
