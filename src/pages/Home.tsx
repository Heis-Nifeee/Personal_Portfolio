import React from 'react';
    import Navbar from '../components/Navbar';
    import Hero from '../components/Hero';
    import Projects from '../components/Projects';
    import Skills from '../components/Skills';
    import About from '../components/About';
    import Contact from '../components/Contact';

    const Home: React.FC = () => {
      return (
        <div className="bg-[#0a0e17] selection:bg-cyan-500/30 selection:text-cyan-200">
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </main>
        </div>
      );
    };

    export default Home;