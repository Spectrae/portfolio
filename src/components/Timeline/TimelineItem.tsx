// src/components/Timeline/TimelineItem.tsx
import { TimelineEntry } from '@/data/timeline';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

interface TimelineItemProps {
  item: TimelineEntry;
}

export const TimelineItem = ({ item }: TimelineItemProps) => {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-card p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10">
      <div className="flex items-start justify-between">
        <div className="rounded-lg bg-primary/10 p-2 text-primary">
          <FiBriefcase size={20} />
        </div>
        <span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          <FiCalendar className="mr-1" /> {item.date}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-bold text-foreground">{item.role}</h3>
        <h4 className="text-sm font-medium text-primary">{item.company}</h4>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </div>
  );
};