// src/components/Projects/ProjectsToolbar.tsx
import React from 'react';
import { FiFilter, FiCheck } from 'react-icons/fi';

interface ToolbarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProjectsToolbar({
  categories,
  selectedCategory,
  onSelectCategory,
}: ToolbarProps) {
  const allCategories = ['All', ...categories];

  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <h3 className="text-2xl font-semibold">Filter by Tech</h3>
      <div className="flex flex-wrap gap-2">
        {allCategories.map((c) => {
          const isSelected = selectedCategory === c;
          return (
            <button
              key={c}
              role="switch"
              aria-checked={isSelected}
              onClick={() => onSelectCategory(c)}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50
                ${
                  isSelected
                    ? 'border-transparent bg-light-primary text-light-primary-foreground dark:bg-dark-primary dark:text-dark-primary-foreground'
                    : 'border-light-foreground/20 bg-transparent hover:bg-light-card/50 dark:border-dark-foreground/20 dark:hover:bg-dark-card/50'
                }`}
            >
              {isSelected && <FiCheck size={16} />}
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}