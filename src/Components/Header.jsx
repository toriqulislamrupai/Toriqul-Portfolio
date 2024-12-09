import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Font Awesome Icons for GitHub and LinkedIn

const Header = ({ heroRef, aboutRef, projectsRef, contactRef, cvRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Hamburger Icon (Always visible on small devices) */}
      <button
        className="fixed top-4 right-6 z-50 text-xl focus:outline-none text-white md:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Header (Hidden on small devices) */}
      <header
        className="hidden md:block sticky top-4 justify-items-center mx-auto rounded-full z-50 transition-shadow duration-300 ease-in-out"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <nav className="flex justify-between items-center p-6 max-w-4xl mx-auto">
          <ul className="flex gap-4">
            {/* Navigation Links */}
            {[
              { label: 'ABOUT', ref: aboutRef },
              { label: 'PORTFOLIO', ref: projectsRef },
              { label: 'CV', ref: cvRef },
              { label: 'CONTACT', ref: contactRef },
            ].map((item, index) => (
              <li
                key={index}
                className="text-gray-300 cursor-pointer hover:text-purple-500"
                onClick={() => handleScroll(item.ref)}
              >
                {item.label}
              </li>
            ))}

            {/* GitHub and LinkedIn Icons */}
            <li>
              <a
                href="https://github.com/toriqulislamrupai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500"
              >
                <FaGithub className="text-xl mx-2" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/toriqul-islam-94752b208"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500"
              >
                <FaLinkedin className="text-xl mx-2" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-40 flex justify-center items-center">
          <ul className="flex flex-col gap-6 text-white text-xl">
            {[
              { label: 'ABOUT', ref: aboutRef },
              { label: 'PORTFOLIO', ref: projectsRef },
              { label: 'CV', ref: cvRef },
              { label: 'CONTACT', ref: contactRef },
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-purple-500"
                onClick={() => {
                  handleScroll(item.ref);
                  setIsMenuOpen(false); // Close menu on click
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
