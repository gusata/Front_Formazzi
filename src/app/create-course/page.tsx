// pages/create-course.js
'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiPlus, FiSave, FiX, FiUpload } from "react-icons/fi";
import Navbar from "../components/barra lateral/nav";

export default function CreateCourse() {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [hasExam, setHasExam] = useState(false);
  const [certificateImage, setCertificateImage] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [examQuestions, setExamQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const addLesson = (data) => {
    setLessons([...lessons, { title: data.title || `Aula ${lessons.length + 1}`, content: data.content }]);
    reset();
    setShowForm(false);
  };

  const handleCertificateUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCertificateImage(reader.result);
      localStorage.setItem("certificateImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddQuestion = () => {
    if (examQuestions.length < 10) {
      setExamQuestions([...examQuestions, { question: "", options: ["", "", "", ""], correctAnswer: null }]);
    } else {
      alert("Você só pode adicionar até 10 questões.");
    }
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...examQuestions];
    updatedQuestions[index].question = value;
    setExamQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, optionIndex, value) => {
    const updatedQuestions = [...examQuestions];
    updatedQuestions[qIndex].options[optionIndex] = value;
    setExamQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, optionIndex) => {
    const updatedQuestions = [...examQuestions];
    updatedQuestions[qIndex].correctAnswer = optionIndex;
    setExamQuestions(updatedQuestions);
  };

  const saveCourse = () => {
    const newCourse = {
      title: courseTitle || "Curso Sem Título",
      description: courseDescription,
      hasExam,
      certificateImage,
      lessons,
      examQuestions,
      progress: 0,
    };
  
    const existingCourses = JSON.parse(localStorage.getItem("courses")!) || [];
    existingCourses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(existingCourses));
  
    alert("Curso salvo com sucesso!");
    setCourseTitle("");
    setCourseDescription("");
    setHasExam(false);
    setCertificateImage(null);
    setLessons([]);
    setExamQuestions([]);
  };

  return (
    <div>
      <Navbar role="adm"/>
      <div className="p-6 flex flex-col items-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-10 pointer-events-none"></div>

        <div className="mb-6">
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Digite o título do curso"
            className="text-3xl font-bold mb-4 text-center w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition"
          />
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            placeholder="Digite a descrição do curso"
            className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:border-blue-500"
            rows="3"
          ></textarea>
          <div className="flex items-center mt-4">
            <label className="mr-2">Incluir Prova?</label>
            <input
              type="checkbox"
              checked={hasExam}
              onChange={(e) => setHasExam(e.target.checked)}
              className="w-5 h-5"
            />
          </div>
          {hasExam && (
            <div className="mt-4">
              <button onClick={handleAddQuestion} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Adicionar Questão
              </button>
              {examQuestions.map((question, qIndex) => (
                <div key={qIndex} className="mt-4 p-4 border border-gray-300 rounded-lg">
                  <input
                    type="text"
                    value={question.question}
                    onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                    placeholder={`Pergunta ${qIndex + 1}`}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                  />
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(qIndex, optionIndex, e.target.value)}
                        placeholder={`Opção ${optionIndex + 1}`}
                        className="w-full p-2 border border-gray-300 rounded-lg mr-2"
                      />
                      <input
                        type="radio"
                        name={`correctAnswer-${qIndex}`}
                        checked={question.correctAnswer === optionIndex}
                        onChange={() => handleCorrectAnswerChange(qIndex, optionIndex)}
                        className="w-5 h-5"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          <div className="mt-4">
            <label className="block mb-2">Carregar Certificado:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCertificateUpload}
              className="w-full"
            />
            {certificateImage && (
              <img src={certificateImage} alt="Certificado" className="mt-4 w-32 h-32 object-cover" />
            )}
          </div>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-600 transition"
        >
          <FiPlus className="mr-2" /> Adicionar Aula
        </button>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-6 rounded-lg shadow-lg mb-6 w-full max-w-md"
          >
            <form onSubmit={handleSubmit(addLesson)}>
              <label className="block text-gray-700">Título da Aula:</label>
              <input
                type="text"
                {...register("title")}
                className="border p-2 rounded-lg w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Aula ${lessons.length + 1}`}
              />
              <label className="block text-gray-700">Conteúdo da Aula:</label>
              <textarea
                {...register("content")}
                className="border p-2 rounded-lg w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Conteúdo da aula"
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition"
              >
                <FiSave className="mr-2" /> Salvar Aula
              </button>
            </form>
          </motion.div>
        )}

        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedLesson(lesson)}
              className="bg-blue-300 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-center cursor-pointer"
            >
              {lesson.title}
            </motion.div>
          ))}
        </div>

        <button
          onClick={saveCourse}
          className="bg-green-600 text-white px-4 py-2 rounded-lg mt-6 hover:bg-green-700 transition"
        >
          Salvar Curso
        </button>

        {selectedLesson && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={() => setSelectedLesson(null)}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedLesson(null)}
              >
                <FiX size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedLesson.title}</h2>
              <p className="text-gray-700">{selectedLesson.content}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
