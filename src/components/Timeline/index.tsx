// src/components/Timeline/index.tsx
import { timelineData } from '@/data/timeline';
import { TimelineItem } from './TimelineItem';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">My Journey</h2>
      <div className="relative mx-auto max-w-2xl">
        {/* The vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-light-primary/30 dark:bg-dark-primary/30" />

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;