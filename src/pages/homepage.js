import React from 'react';
import Hero from './hero';
import About from './about';
import WorkSkills from './work_skills';
import Projects from './projects';
import Contact from './contact';

const HomePage = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <WorkSkills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;