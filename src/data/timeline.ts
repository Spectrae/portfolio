// src/data/timeline.ts
export interface TimelineEntry {
  date: string;
  role: string;
  company: string;
  description: string;
}

export const timelineData: TimelineEntry[] = [
  {
    date: 'Summer 2025',
    role: 'Backend Intern (Rust)',
    company: 'Tech Startup',
    description:
      'Developed high-performance microservices in Rust, focusing on low-latency data processing. Gained experience with asynchronous programming and Docker.',
  },
  {
    date: '2024 - Present',
    role: 'Open Source Contributor',
    company: 'Linux Kernel (hobbyist)',
    description:
      'Contributed minor patches to documentation and drivers. Learning C and kernel architecture in my free time.',
  },
  {
    date: 'Summer 2024',
    role: 'Web Dev Intern',
    company: 'Local Agency',
    description:
      'Built and maintained client websites using React and Node.js. Worked with a team to deliver projects on tight deadlines.',
  },
];