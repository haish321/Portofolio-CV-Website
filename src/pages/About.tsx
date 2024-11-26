import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Github, Linkedin, Mail, Calendar, MapPin, Code2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600">
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="pt-24 pb-8 px-6 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                John Doe
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Senior Backend Developer
              </p>

              <div className="flex justify-center space-x-4 mb-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors"
                >
                  <Github className="h-6 w-6 text-gray-700" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-gray-700" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="p-2 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors"
                >
                  <Mail className="h-6 w-6 text-gray-700" />
                </a>
              </div>

              <div className="flex justify-center space-x-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Joined 2019</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center">
                  <Code2 className="h-5 w-5 mr-2" />
                  <span>Backend Developer</span>
                </div>
              </div>

              <div className="max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-600 mb-6">
                  I'm a passionate backend developer with over 5 years of
                  experience in building scalable distributed systems and
                  microservices. My expertise lies in designing and implementing
                  high-performance applications that can handle millions of
                  requests daily.
                </p>
                <p className="text-gray-600">
                  When I'm not coding, I enjoy contributing to open-source
                  projects, mentoring junior developers, and staying up-to-date
                  with the latest technologies in the backend development
                  ecosystem. I'm particularly interested in system architecture,
                  performance optimization, and building reliable distributed
                  systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
