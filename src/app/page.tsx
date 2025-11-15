// src/app/page.tsx

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Timeline';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';

import GithubActivityClient from '@/components/GithubActivityClient';

import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl px-4 space-y-24">

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* EXPERIENCE / TIMELINE */}
      <section id="experience">
        <Experience />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications">
        <Certifications />
      </section>

      {/* 🔥 FULL-WIDTH GITHUB ACTIVITY SECTION */}
      <section id="github-activity" className="w-full px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <GithubActivityClient />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}
