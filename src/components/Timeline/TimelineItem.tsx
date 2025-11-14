// src/components/Timeline/TimelineItem.tsx
'use client';

import { useState } from 'react';
import { TimelineEntry } from '@/data/timeline';
import { FiChevronDown, FiBriefcase } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      {/* Icon on the timeline */}
      <div className="absolute left-1/2 top-2 z-10 -translate-x-1/2 transform rounded-full bg-light-card p-2 ring-4 ring-light-primary dark:bg-dark-card dark:ring-dark-primary">
        <FiBriefcase className="text-light-primary dark:text-dark-primary" />
      </div>

      {/* Card */}
      <div
        className={`w-full ${
          isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
        } md:w-1/2 ${isLeft ? '' : 'md:ml-auto'}`}
      >
        {/* --- EDITED CARD DIV --- */}
        <div className="relative mt-8 rounded-lg bg-light-card p-6 shadow-lg dark:bg-dark-card md:mt-0">
          {/* --- EDITED SPAN --- */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-medium text-light-foreground/70 dark:text-dark-foreground/70 md:relative md:top-auto md:left-auto md:translate-x-0 md:mb-2">
            {item.date}
          </span>
          <h3 className="text-xl font-semibold">{item.role}</h3>
          <h4 className="mb-2 text-light-primary dark:text-dark-primary">
            {item.company}
          </h4>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-sm text-light-foreground/80 dark:text-dark-foreground/80">
                  {item.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={`desc-${index}`}
            className="mt-3 flex items-center text-sm font-medium text-light-primary dark:text-dark-primary"
          >
            {isOpen ? 'Show Less' : 'Show More'}
            <FiChevronDown
              className={`ml-1 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};