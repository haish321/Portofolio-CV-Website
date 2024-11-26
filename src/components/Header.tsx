import React, { useState } from 'react';
import { Code2, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on a different page, navigate to home and then scroll
      navigate('/', { state: { scrollToSection: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate('/about');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">John Doe</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={handleHomeClick}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={handleAboutClick}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('skills')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation('experience')}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Experience
            </button>
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="pt-4 pb-3 space-y-2">
              <button
                onClick={handleHomeClick}
                className="block w-full text-left py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={handleAboutClick}
                className="block w-full text-left py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('skills')}
                className="block w-full text-left py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => handleNavigation('projects')}
                className="block w-full text-left py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigation('experience')}
                className="block w-full text-left py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Experience
              </button>
            </nav>
            <div className="pt-3 pb-4 border-t border-gray-200 flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
