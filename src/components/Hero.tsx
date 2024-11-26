import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <Terminal className="h-12 w-12 sm:h-16 sm:w-16 text-indigo-600 mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Backend Developer & <br className="hidden sm:block" />
            Engineer
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
            Crafting robust, scalable backend solutions and architecting systems that power modern applications.
            Specialized in distributed systems and high-performance computing.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              About Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}