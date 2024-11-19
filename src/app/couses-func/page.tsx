'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/barra lateral/nav";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [expandedCourseIndex, setExpandedCourseIndex] = useState(null);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [showExamModal, setShowExamModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [examAnswers, setExamAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [examCompleted, setExamCompleted] = useState(false);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);
  }, []);

  const handleExpand = (index) => {
    setExpandedCourseIndex(expandedCourseIndex === index ? null : index);
  };

  const openLessonModal = (course) => {
    setSelectedCourse(course);
    setShowLessonModal(true);
  };

  const closeLessonModal = () => {
    setShowLessonModal(false);
    setSelectedCourse(null);
  };

  const toggleLessonCompletion = (lessonIndex) => {
    const updatedCourses = [...courses];
    const courseIndex = updatedCourses.findIndex(course => course.title === selectedCourse.title);
    
    if (courseIndex !== -1) {
      updatedCourses[courseIndex].lessons[lessonIndex].completed = !updatedCourses[courseIndex].lessons[lessonIndex].completed;
      const completedLessons = updatedCourses[courseIndex].lessons.filter(lesson => lesson.completed).length;
      updatedCourses[courseIndex].progress = Math.round((completedLessons / updatedCourses[courseIndex].lessons.length) * 100);
      
      setCourses(updatedCourses);
      setSelectedCourse(updatedCourses[courseIndex]);
      localStorage.setItem("courses", JSON.stringify(updatedCourses));
    }
  };

  const openExamModal = (course) => {
    if (course.completed) {
      alert("Este curso já foi concluído. Você não pode realizar a prova novamente.");
      return;
    }
    setSelectedCourse(course);
    setExamAnswers(new Array(course.examQuestions.length).fill(null));
    setShowExamModal(true);
  };

  const closeExamModal = () => {
    setShowExamModal(false);
    setCorrectAnswers(0);
    setExamCompleted(false);
  };

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...examAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setExamAnswers(updatedAnswers);
  };

  const handleExamSubmission = () => {
    const score = selectedCourse.examQuestions.reduce((acc, question, index) => {
      return question.correctAnswer === examAnswers[index] ? acc + 1 : acc;
    }, 0);

    setCorrectAnswers(score);
    setExamCompleted(true);

    if (score >= 6) {
      const updatedCourses = courses.map((course) =>
        course.title === selectedCourse.title ? { ...course, completed: true, certificateUnlocked: true } : course
      );
      setCourses(updatedCourses);
      localStorage.setItem("courses", JSON.stringify(updatedCourses));
      alert("Parabéns! Você passou na prova e desbloqueou o certificado.");
    } else {
      alert("Você não atingiu a pontuação mínima. Tente novamente.");
    }
  };

  return (
    <div>
      <Navbar role="func"/>
      <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Lista de Cursos</h1>
        {courses.length === 0 ? (
          <p className="text-gray-500">Nenhum curso encontrado.</p>
        ) : (
          <div className="w-full grid grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
                <div>
                  <h2 className="text-xl font-bold">{course.title}</h2>
                  <p className="text-gray-500">{course.description}</p>
                </div>
                <div className="mt-4 gap-4 grid grid-cols-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition"
                    onClick={() => openLessonModal(course)}
                  >
                    Visualizar Aulas
                  </button>
                  {course.progress === 100 && !course.completed && (
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600 transition"
                      onClick={() => openExamModal(course)}
                    >
                      Realizar Prova
                    </button>
                  )}
                  {course.completed && (
                    <p className="text-green-600 font-semibold mt-2">Curso Concluído! Certificado Disponível.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Aulas */}
      {showLessonModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative">
            <button onClick={closeLessonModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <FiX size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>
            <ul className="list-disc list-inside mb-4">
              {selectedCourse.lessons.map((lesson, index) => (
                <li key={index} className="text-gray-600 flex justify-between items-center">
                  <span>{lesson.title}</span>
                  <button
                    onClick={() => toggleLessonCompletion(index)}
                    className={`text-sm ${lesson.completed ? "text-green-500" : "text-blue-500"}`}
                  >
                    {lesson.completed ? "Concluída" : "Marcar como concluída"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Modal de Prova */}
      {showExamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative">
            <button onClick={closeExamModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <FiX size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Prova de {selectedCourse.title}</h2>
            {!examCompleted ? (
              <div className="max-h-[60vh] overflow-y-auto pr-2">
                {selectedCourse.examQuestions.map((question, questionIndex) => (
                  <div key={questionIndex} className="mt-4">
                    <p className="font-semibold">{`Pergunta ${questionIndex + 1}: ${question.question}`}</p>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center">
                          <input
                            type="radio"
                            name={`question-${questionIndex}`}
                            value={optionIndex}
                            checked={examAnswers[questionIndex] === optionIndex}
                            onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                            className="mr-2"
                          />
                          <label>{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : correctAnswers >= 6 ? (
              <div className="mt-4">
                <p className="text-green-600 font-bold">Parabéns! Você passou na prova.</p>
                <img src={selectedCourse.certificateImage} alt="Certificado" className="mt-4 w-32 h-32" />
              </div>
            ) : (
              <p className="text-red-600 font-bold">Você não atingiu a pontuação mínima.</p>
            )}
            {!examCompleted && (
              <button
                onClick={handleExamSubmission}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-blue-600 transition"
              >
                Enviar Respostas
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
