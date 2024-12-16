import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const TopperSolution = () => {
  const [showQuestions, setShowQuestions] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const { subject, year } = useParams();
  const navigate = useNavigate();

  const questions = [
    {
      id: '01',
      question: 'What is the capital of France?',
      answer: 'The capital of France is Paris.',
      steps: [
        'Paris is located in northern France.',
        'It is the largest city in France.',
        'Paris is known as the "City of Light".'
      ],
      hasVideoSolution: true
    },
    {
      id: '02',
      question: 'Who wrote "Romeo and Juliet"?',
      answer: 'William Shakespeare wrote "Romeo and Juliet".',
      steps: [
        'Shakespeare was an English playwright.',
        'He wrote "Romeo and Juliet" in the late 16th century.',
        'It is one of his most famous tragedies.'
      ],
      hasVideoSolution: false
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6 font-sans relative">
      <div className="flex items-start gap-4 mb-8">
        <button 
          onClick={() => navigate(`/subject/${subject}/pyq`)}
          className="p-2 hover:bg-gray-100 rounded-full mt-1"
        >
          <FiArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {subject.charAt(0).toUpperCase() + subject.slice(1)} CBSE {year} PYQ
          </h1>
          <h2 className="text-xl text-gray-600 font-medium">Topper Solutions</h2>
        </div>
      </div>

      <div className="flex items-center space-x-2 border-b pb-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={showQuestions}
            onChange={() => setShowQuestions(!showQuestions)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
          dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
          after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
          after:transition-all dark:border-gray-600 peer-checked:bg-[#F85B2C]"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Questions</span>
        </label>
      </div>

      {showQuestions && (
        <div className="space-y-4">
          {questions.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Question {item.id}</h3>
                    <p className="text-gray-600">{item.question}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t px-6 py-4 space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Answer {item.id}</h4>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>

                      {item.steps && (
                        <div className="space-y-2">
                          {item.steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1 h-1 rounded-full bg-gray-400 mt-2" />
                              <p>{step}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.hasVideoSolution && (
                        <button className="flex items-center justify-center px-4 py-2 border 
                        border-[#F85B2C] rounded-md text-sm font-medium text-[#F85B2C] 
                        bg-white hover:bg-orange-50 focus:outline-none">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Video Solution
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}

      <button className="fixed top-20 right-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none 
      focus:ring-2 focus:ring-offset-2 focus:ring-[#F85B2C] bg-white shadow-md">
        <svg className="w-6 h-6 text-[#F85B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  );
};

export default TopperSolution;
