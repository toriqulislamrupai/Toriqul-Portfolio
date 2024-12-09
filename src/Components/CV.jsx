import React from 'react';

function CV() {
  return (
    <div className="p-10 rounded-lg  bg-white/10 backdrop-blur-lg font-serif  flex flex-col items-center">
      <h1 className="text-4xl font-bold  text-white font-serif mb-4">My CV</h1>
      
      <div className="flex items-center mt-4 text-gray-300 font-light">
        <a 
          href="https://drive.google.com/file/d/1XsqLI46v7Ye5I2JLAvrGXaCQ3AKwmqXd/view?usp=sharing"         
          className="btn btn-primary text-black bg-purple-400 hover:bg-purple-500 px-4 py-2 rounded-md"
          >
          View CV
        </a>
        <span className="ml-4 text-gray-500"> (PDF Document)</span>
      </div>
      <div className="mt-6 w-full max-w-md">
        <div className="border-b border-gray-300"></div>
      </div>
    </div>
  );
}

export default CV;
