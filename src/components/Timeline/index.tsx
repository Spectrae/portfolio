// src/components/Timeline/index.tsx
'use client';

import { timelineData } from '@/data/timeline';
import { TimelineItem } from './TimelineItem';

const Timeline = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Experience</h2>
          <p className="text-muted-foreground">
            My professional journey and key milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;