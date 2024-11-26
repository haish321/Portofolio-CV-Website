import React from 'react';
import { Database, Server, Cloud, Lock } from 'lucide-react';

const skills = [
  {
    category: "Backend Development",
    icon: <Server className="h-8 w-8 text-indigo-600" />,
    items: ["Node.js", "Python", "Java", "Go"]
  },
  {
    category: "Databases",
    icon: <Database className="h-8 w-8 text-indigo-600" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-8 w-8 text-indigo-600" />,
    items: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    category: "Security & Performance",
    icon: <Lock className="h-8 w-8 text-indigo-600" />,
    items: ["OAuth 2.0", "JWT", "HTTPS", "Load Balancing"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="ml-3 font-semibold text-lg">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}