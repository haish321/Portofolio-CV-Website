import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.find((p, index) => index.toString() === id);
  const topRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { images = [] } = project;

  const handleBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </button>
        </div>

        {/* Main Content */}
        <div ref={topRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images Section */}
            <div className="space-y-4">
              {images.length === 1 && (
                <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  <img
                    src={images[0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-[400px] object-cover hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(images[0])}
                  />
                </div>
              )}
              
              {images.length > 1 && (
                <>
                  <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <img
                      src={images[0]}
                      alt={`${project.title} main screenshot`}
                      className="w-full h-[400px] object-cover hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(images[0])}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {images.slice(1).map((image, index) => (
                      <div 
                        key={index}
                        className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-[200px] object-cover hover:opacity-90 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold">Project Overview</h2>
                <p className="text-gray-600">{project.description}</p>
                
                {project.features && (
                  <>
                    <h3 className="text-xl font-semibold mt-6">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                {project.challenges && (
                  <>
                    <h3 className="text-xl font-semibold mt-6">Technical Challenges</h3>
                    <p className="text-gray-600">{project.challenges}</p>
                  </>
                )}
              </div>

              {/* Project Links */}
              <div className="flex space-x-4 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}