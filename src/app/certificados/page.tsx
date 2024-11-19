'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/barra lateral/nav";

export default function Certificates() {
  const [courses, setCourses] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const completedCourses = storedCourses.filter(course => course.completed && course.certificateUnlocked);
    setCourses(completedCourses);

    if (completedCourses.length > 0) {
      setSelectedCertificate(completedCourses[0]); // Exibe o primeiro certificado por padrão
    }
  }, []);

  const handleCertificateClick = (course) => {
    setSelectedCertificate(course);
  };

  return (
    <div>
      <Navbar role="func" />
      <div className="flex min-h-screen p-6 bg-gray-100">
        {/* Lista de Certificados à Esquerda */}
        <div className="w-1/4 bg-white shadow-lg p-4 rounded-lg mr-4">
          <h2 className="text-xl font-bold mb-4">Certificados Ganhos</h2>
          {courses.length === 0 ? (
            <p className="text-gray-500">Nenhum certificado disponível.</p>
          ) : (
            <ul>
              {courses.map((course, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded-lg mb-2 ${
                    selectedCertificate?.title === course.title ? 'bg-blue-100' : 'bg-white'
                  }`}
                  onClick={() => handleCertificateClick(course)}
                >
                  <p className="text-gray-700 font-semibold">{course.title}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Exibição do Certificado à Direita */}
        <div className="flex-1 bg-white shadow-lg p-6 rounded-lg flex items-center justify-center">
          {selectedCertificate ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">{selectedCertificate.title}</h2>
              <img
                src={selectedCertificate.certificateImage}
                alt={`Certificado de ${selectedCertificate.title}`}
                className="w-full max-w-md object-cover border rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <p className="text-gray-500">Selecione um certificado para visualizá-lo.</p>
          )}
        </div>
      </div>
    </div>
  );
}
