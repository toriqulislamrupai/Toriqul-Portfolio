import React, { useState } from "react";
import Home from "./Home";


// Helper Component for Skill Progress Bar
const SkillProgress = ({ skill, level }) => (
  <div className="flex items-center gap-4">
    <span className="text-lg font-medium text-gray-300 w-1/4">{skill}</span>
    <div className="w-full bg-gray-700 rounded-full h-4">
      <div
        className="bg-purple-400 h-4 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
    <span className="text-lg font-medium text-gray-300 w-1/6">{level}%</span>
  </div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  const handleToggle = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Skills":
        return (
          <div className="transition-all duration-300 ease-in-out p-6 rounded-lg bg-white/10 backdrop-blur-lg">
            <h3 className="text-3xl font-bold mb-4 font-serif text-purple-400 text-center">Skills</h3>
            <div className="space-y-8">
              {/* Section: Languages */}
              <div>
                <h4 className="text-2xl font-semibold text-purple-400 mb-4">Languages</h4>
                <div className="space-y-4">
                  {[
                    { skill: "HTML", level: 95 },
                    { skill: "CSS", level: 90 },
                    { skill: "JavaScript", level: 92 },
                  ].map(({ skill, level }, index) => (
                    <SkillProgress key={index} skill={skill} level={level} />
                  ))}
                </div>
              </div>

              {/* Section: Frontend Development */}
              <div>
                <h4 className="text-2xl font-semibold text-purple-400 mb-4">Frontend Development</h4>
                <div className="space-y-4">
                  {[
                    { skill: "React.js", level: 90 },
                    { skill: "Next.js", level: 85 },
                    { skill: "Tailwind CSS", level: 88 },
                    { skill: "Vite", level: 80 },
                  ].map(({ skill, level }, index) => (
                    <SkillProgress key={index} skill={skill} level={level} />
                  ))}
                </div>
              </div>

              {/* Section: Backend Development */}
              <div>
                <h4 className="text-2xl font-semibold text-purple-400 mb-4">Backend Development</h4>
                <div className="space-y-4">
                  {[
                    { skill: "Node.js", level: 40 },
                    { skill: "MongoDB", level: 50 },
                    { skill: "Firebase", level: 40 },
                  ].map(({ skill, level }, index) => (
                    <SkillProgress key={index} skill={skill} level={level} />
                  ))}
                </div>
              </div>

              {/* Section: Design */}
              <div>
                <h4 className="text-2xl font-semibold text-purple-400 mb-4">Design</h4>
                <div className="space-y-4">
                  {[
                    { skill: "Figma", level: 60 },
                    { skill: "UI / UX Design", level: 60 },
                  ].map(({ skill, level }, index) => (
                    <SkillProgress key={index} skill={skill} level={level} />
                  ))}
                </div>
              </div>

              {/* Section: DevOps */}
              <div>
                <h4 className="text-2xl font-semibold text-purple-400 mb-4">DevOps</h4>
                <div className="space-y-4">
                  {[
                    { skill: "GitHub", level: 70 },
                  ].map(({ skill, level }, index) => (
                    <SkillProgress key={index} skill={skill} level={level} />
                  ))}
                </div>
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-6">

              </div>
            </div>
          </div>
        );

      case "Experience":
        return (
          <div>
            <div>

            </div>
            <div id="experience-section" className="transition-all duration-300 ease-in-out p-6 rounded-lg bg-white/10 backdrop-blur-lg">
              <h3 className="text-3xl font-bold mb-4 font-serif text-purple-400 text-center">Experience</h3>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6">
                <div className="">
                  <h4 className="text-xl font-semibold text-purple-400">CodeAlpha Internship</h4>
                  <p className="text-lg text-gray-300 mt-1">September 1, 2024 - September 30, 2024</p>
                </div>
                <div className=" ">
                  <ul className="list-disc list-inside text-lg leading-8 font-light text-gray-300">
                    <li>Completed React front-end development assignments, including building a portfolio, music player, calculator, and image gallery.</li>
                    <li>Developed responsive web applications with a mobile-first approach, ensuring compatibility across various devices and screen sizes using Tailwind CSS.</li>
                    <li>Implemented dynamic features such as autoplay in the music player, an interactive lightbox, and carousel in the image gallery, improving user experience.</li>
                    <li>Enhanced performance by optimizing React components, ensuring faster load times and smooth interactions.</li>
                    <li>Integrated external APIs for dynamic content loading, including music APIs and image data, using libraries like Axios and React Router.</li>
                    <li>Collaborated with team members in daily standups, code reviews, and pair programming sessions, contributing to overall project success.</li>
                    <li>Successfully delivered all projects on time, well-documented, and thoroughly tested, meeting the specifications with high-quality standards.</li>
                    <li>Awarded a Recommendation Letter for excellent performance in web development, showcasing strong problem-solving abilities and attention to detail.</li>
                  </ul>
                  <div className=" flex  gap-2   ">
                    <button
                      onClick={() => window.open('https://i.ibb.co.com/GW4DgXJ/462565864-1104115991070876-5328999822817329926-n.jpg', '_blank')}
                      className="mt-4 bg-purple-500  text-white text-xs md:text-base lg:text-base px-4 py-2 sm:px-6 sm:py-3   rounded-lg hover:bg-purple-600"
                      >
                      View Certificate
                    </button>
                    <button
                      onClick={() => window.open('https://i.ibb.co.com/6rkR5NY/467470334-1819672762170057-4442965964903729831-n.jpg', '_blank')}
                      className="mt-4 bg-purple-500  text-white text-xs md:text-base lg:text-base  px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-purple-600"
                      >
                      View Recommendation Letter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        );
      case "Education":
        return (
          <div className="transition-all duration-300 ease-in-out p-6 rounded-lg bg-white/10 backdrop-blur-lg">
            {/* Header */}
            <h3 className="text-3xl font-bold mb-4 font-serif text-purple-400 text-center">
              Education
            </h3>

            {/* Education Entries */}
            <div className="flex flex-col gap-8">
              {/* B.Sc. in CSE */}
              <div className="border-b border-gray-600 pb-4">
                <h4 className="text-xl font-semibold text-purple-400">
                  B.Sc. in CSE, University of Development Alternative, Dhaka
                </h4>
                <p className="text-lg text-gray-300">2020</p>
                <button
                  aria-label="View B.Sc. Certificate"
                  onClick={() =>
                    window.open("https://i.ibb.co.com/dPwMLqB/462559454-1239157943976228-3376185006387111677-n.jpg", "_blank")
                  }
                  className="mt-4 bg-purple-500  text-white text-xs md:text-base lg:text-base  px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-purple-600"
                  >
                  View Certificate
                </button>
              </div>

              {/* HSC */}
              <div className="border-b border-gray-600 pb-4">
                <h4 className="text-xl font-semibold text-purple-400">
                  HSC, Narsingdi Government College, Narsingdi, Dhaka
                </h4>
                <p className="text-lg text-gray-300">2015</p>
              </div>

              {/* SSC */}
              <div className="border-b border-gray-600 pb-4">
                <h4 className="text-xl font-semibold text-purple-400">
                  SSC, Brahmondi K.K.M. Government High School, Narsingdi, Dhaka
                </h4>
                <p className="text-lg text-gray-300">2013</p>
              </div>


            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="pt-28 md:pt-40 lg:pt-0 bg-black text-white font-serif">
      <Home className='' activeTab={activeTab} setActiveTab={handleToggle} />
      <div className= "mt-40 md:mt-32 lg:mt-5  ">
      <h2 className="text-4xl font-bold text-center mb-8  tracking-wide">About</h2>
      <div className="tabs tabs-boxed  w-4/6 mx-auto rounded-full   bg-white/10  flex justify-center mb-6 ">
        {["Skills", "Experience", "Education"].map((tab) => (
          <button
            key={tab}
            className={`tab px-2 py-2 mx-auto rounded-full font-semibold text-lg    ${activeTab === tab
              ? "bg-purple-500 text-white shadow-md"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            onClick={() => handleToggle(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      </div>
      <div className="mt-6">{renderContent()}</div>
    </section>
  );
};

export default About;
