import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior Backend Developer",
    period: "2021 - Present",
    description: "Led the development of microservices architecture, improving system scalability by 300%.",
    achievements: [
      "Implemented distributed caching system reducing latency by 60%",
      "Architected real-time data processing pipeline handling 1M+ events/day",
      "Mentored junior developers and established coding standards"
    ]
  },
  {
    company: "StartupX",
    position: "Backend Developer",
    period: "2019 - 2021",
    description: "Developed and maintained core backend services for a SaaS platform.",
    achievements: [
      "Built authentication system supporting 100K+ users",
      "Optimized database queries reducing response time by 40%",
      "Implemented automated CI/CD pipeline"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-indigo-200">
              <div className="absolute -left-3 top-0">
                <div className="bg-white p-1 rounded-full">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div className="mb-1">
                <span className="text-sm text-indigo-600 font-medium">{exp.period}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
              <h4 className="text-lg text-gray-600 mb-3">{exp.company}</h4>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}