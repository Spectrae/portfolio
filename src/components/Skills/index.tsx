// src/components/Skills/index.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type SkillItem = {
  name: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js', icon: 'nextjs.svg' },
      { name: 'React', icon: 'react.svg' },
      { name: 'TypeScript', icon: 'typescript.svg' },
      { name: 'Tailwind CSS', icon: 'tailwind.svg' },
      { name: 'Framer Motion', icon: 'framermotion.svg' },
    ],
  },
  {
    title: 'Backend & Systems',
    skills: [
      { name: 'Node.js', icon: 'nodejs.svg' },
      { name: 'Rust', icon: 'rust.svg' },
      { name: 'C / C++', icon: 'c.svg' },
      { name: 'Linux', icon: 'linux.svg' },
      { name: 'Docker', icon: 'docker.svg' },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql.svg' },
      { name: 'MongoDB', icon: 'mongodb.svg' },
      { name: 'Git', icon: 'git.svg' },
      { name: 'Jest', icon: 'jest.svg' },
      { name: 'Playwright', icon: 'playwright.svg' },
    ],
  },
  {
    title: 'Exploring',
    skills: [
      { name: 'Solidity', icon: 'solidity.svg' },
      { name: 'Web3', icon: 'web3.svg' },
      { name: 'Quantum', icon: 'quantum.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">My Toolkit</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies, tools, and languages I use to build high-performance applications.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="space-y-6">

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-foreground/90 border-l-4 border-primary pl-4">
                {category.title}
              </h3>

              {/* Grid */}
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + catIndex * 0.1 }}
                    viewport={{ once: true }}

                    className="
                      group relative flex flex-col items-center justify-center gap-3
                      rounded-2xl p-4 card-glass soft-shadow
                      transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary/20
                    "
                  >
                    {/* Soft Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />

                    {/* Logo */}
                    <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={`/assets/logos/${skill.icon}`}
                        alt={`${skill.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Label */}
                    <span className="z-10 text-xs font-medium text-muted-foreground group-hover:text-foreground text-center">
                      {skill.name}
                    </span>

                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
