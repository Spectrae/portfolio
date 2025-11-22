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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-white/5 dark:border-white/10 shadow-md transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
    >
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="mb-6 line-clamp-3 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4 border-t border-muted pt-4">
          <Link
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiGithub className="text-lg" /> Code
          </Link>
          <Link
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <FiExternalLink className="text-lg" /> Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};