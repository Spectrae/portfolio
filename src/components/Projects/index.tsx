// src/components/Projects/index.tsx
'use client';

import { useState, useMemo } from 'react';
import { projectData } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import ProjectsToolbar from './ProjectsToolbar';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const DEFAULT_COUNT = 6;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(DEFAULT_COUNT);

  // Unique category tags
  const categories = useMemo(() => {
    const allTags = projectData.flatMap((p) => p.tech);
    return Array.from(new Set(allTags));
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectData;
    return projectData.filter((p) => p.tech.includes(selectedCategory));
  }, [selectedCategory]);

  // Slice to 6 by default (or more on "Show More")
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const hasMore = visibleCount < filteredProjects.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + DEFAULT_COUNT);
  };

  const handleCollapse = () => {
    setVisibleCount(DEFAULT_COUNT);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">

        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A collection of my work exploring kernel modules, AI, and full-stack applications.
          </p>
        </div>

        <ProjectsToolbar
          categories={categories.slice(0, 6)}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setVisibleCount(DEFAULT_COUNT);
          }}
        />

        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > DEFAULT_COUNT && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              onClick={hasMore ? handleShowMore : handleCollapse}
              className="gap-2"
            >
              {hasMore ? (
                <>
                  Show More Projects
                  <FiChevronDown className="animate-bounce" />
                </>
              ) : (
                <>
                  Show Less
                  <FiChevronUp />
                </>
              )}
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
