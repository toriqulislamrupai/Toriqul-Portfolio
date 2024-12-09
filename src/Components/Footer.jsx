import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-4">
          {/* GitHub */}
          <a
            href="https://github.com/toriqulislamrupai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition duration-300"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/toriqul-islam-94752b208"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/@toriqulislamrupai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition duration-300"
          >
            <FaMedium size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
