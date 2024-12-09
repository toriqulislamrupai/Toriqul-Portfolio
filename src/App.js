import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import CV from './Components/CV';
import Footer from './Components/Footer';
import './styles.css'; // Assuming you have a CSS file for custom styles

const App = () => {
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const cvRef = useRef(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        {/* Header and Main Content */}
        <Header
          heroRef={homeRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          cvRef={cvRef} // Pass the CV reference
        />

        {/* Section for navigation */}
        <main className="flex-grow">
           

          <section ref={aboutRef} className="p-8"  >
            <About />
          </section>

          <section ref={projectsRef} className="p-8">
            <Projects />
          </section>

          <section ref={cvRef} className="p-8">
            <CV /> {/* Render the CV component */}
          </section>

          <section ref={contactRef} className="p-8">
            <Contact />
          </section>
        </main>

        {/* Footer - Fixed at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
