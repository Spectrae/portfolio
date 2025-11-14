// src/app/page.tsx
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Timeline';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import GithubActivity from '@/components/GithubActivity'; // 1. Import
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <GithubActivity /> {/* 2. Add here */}
      <Contact />
    </div>
  );
}