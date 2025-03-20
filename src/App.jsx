import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import FlashlightEffect from './components/FlashlightEffect.jsx';
import Bio from './sections/Bio.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Footer from './sections/Footer.jsx';

import myInfo from '../myInfo';

const { experiences, projects } = myInfo;

export default function App() {
  const updateNavLink = () => {
    const sections = document.querySelectorAll('#content > section');

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const threshold = window.innerHeight / 2;

      if (rect.top < threshold) {
        const prevSelectedNav = document.querySelectorAll('.nav-select');
        prevSelectedNav[0].classList.remove('nav-select');

        const newSelectedNav = document.querySelector(`#${section.id}-nav`);
        newSelectedNav.classList.add('nav-select');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', updateNavLink);

    return () => {
      window.removeEventListener('scroll', updateNavLink);
    };
  }, []);

  return (
    <>
      <Analytics />
      <FlashlightEffect />
      <div id="main">
        <Bio />
        <div id="content">
          <About />
          <Experience experiences={experiences} />
          <Projects projects={projects} />
          <Footer />
        </div>
      </div>
    </>
  );
}
