// src/components/Projects/ProjectCard.tsx
import { Project } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="glass-effect group relative overflow-hidden rounded-xl shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
        <p className="mb-4 text-sm text-light-foreground/80 dark:text-dark-foreground/80">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-light-primary/10 px-3 py-1 text-xs font-medium text-light-primary dark:bg-dark-primary/10 dark:text-dark-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="flex items-center gap-1 transition-colors hover:text-light-primary dark:hover:text-dark-primary"
          >
            <FiGithub />
            GitHub
          </Link>
          <Link
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="flex items-center gap-1 transition-colors hover:text-light-primary dark:hover:text-dark-primary"
          >
            <FiExternalLink />
            Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};