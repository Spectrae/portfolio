// src/components/Projects/index.tsx
'use client';

import { useState, useMemo } from 'react';
import { projectData } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import ProjectsToolbar from './ProjectsToolbar';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get all unique categories from the project data
  const categories = useMemo(() => {
    const allTech = projectData.flatMap((p) => p.tech);
    const uniqueTech = [...new Set(allTech)];
    // Optional: Manually define the order or prominent categories
    // For this, we'll just use a few common ones
    return [
      'Next.js',
      'Rust',
      'TypeScript',
      'Solidity',
      'Python',
    ].filter((cat) => uniqueTech.includes(cat));
  }, []);

  // Filter projects based on the selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projectData;
    }
    return projectData.filter((p) => p.tech.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">Projects</h2>

      <ProjectsToolbar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <motion.div
        layout
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
         <div className="mt-8 text-center text-light-foreground/70 dark:text-dark-foreground/70">
           <p>No projects found for this category.</p>
         </div>
      )}
    </section>
  );
};

export default Projects;