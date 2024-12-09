import React from 'react';

const Home = ({ setActiveTab }) => {


  return (
    <section className="relative bg-black h-[85vh] md:h-[60vh] lg:h-[50vh]  text-white flex items-center  justify-center px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Circular Image with Lighting Effect */}
        <div className="flex justify-center relative">
          {/* Dynamic Lighting Effect */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 rounded-full animate-pulse blur-xl"></div>
          <div
            className="relative w-48 h-48  md:w-64 md:h-64 rounded-full bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url('https://i.ibb.co/NjBnssX/IMG-20211210-WA0002.jpg')`, // Replace with your actual image URL
              backgroundSize: 'cover',
            }}
          ></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-center md:text-left">
          <p className="text-2xl md:text-4xl font-serif">
            I'm{' '}
            <span className="font-bold text-xl md:text-3xl">
              Toriqul Islam Rupai
            </span>
            , a Junior Frontend Developer passionate about crafting beautiful,
            user-friendly web experiences.
          </p>
          <p className="mt-4 text-gray-300 font-light md:text-xl font-serif">
            Take a look at my projects, explore my skills, and feel free to
            reach out for collaboration or opportunities. Let's create something
            amazing together!
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4 scroll-smooth">

            <a
              href="#experience-section"
              onClick={() => setActiveTab("Experience")}
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-all duration-300"
              aria-label="See my experience section"
            >
              See Experience
            </a>
          </div>
        </div>


      </div>

    </section>
  );
};

export default Home;
