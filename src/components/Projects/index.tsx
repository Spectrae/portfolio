// src/components/Projects/index.tsx
'use client';

import { useState } from 'react';
import { projectData } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const INITIAL_SHOW = 4;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projectData : projectData.slice(0, INITIAL_SHOW);

  return (
    <section id="projects" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">Projects</h2>
      
      <motion.div 
        layout 
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {projectsToShow.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>

      {projectData.length > INITIAL_SHOW && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center justify-center gap-2 rounded-full border border-light-primary px-6 py-3 font-semibold text-light-primary transition-colors hover:bg-light-primary/10 dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-primary/10"
          >
            <span>{showAll ? 'Show Less' : 'Show More'}</span>
            <FiChevronDown
              className={`transition-transform ${showAll ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;