// src/components/About/index.tsx
import Image from 'next/image';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Clients Worldwide' },
  { value: '25+', label: 'Projects Completed' },
];

const skills = [
  {
    title: 'Systems & Kernel',
    description: 'Deep diving into C, Rust, and Linux internals.',
  },
  {
    title: 'Full-Stack Web',
    description: 'Building modern web apps with Next.js and TypeScript.',
  },
  {
    title: 'Emerging Tech',
    description: 'Exploring Web3, NeuroSymbolicAI, and Quantum.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">About Me</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          {/* The Image component has been removed from here */}
          <p className="mb-6 text-lg leading-relaxed">
            I'm a 3rd-year B.Tech student with a background as a gymnast and a
            passion for low-level systems programming and high-level web
            architecture. I thrive on challenges, from optimizing kernel
            modules in Rust to building performant, beautiful UIs in Next.js.
          </p>
          <div className="flex justify-around gap-4 rounded-lg bg-light-card p-6 shadow-sm dark:bg-dark-card">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-3xl font-bold text-light-primary dark:text-dark-primary">
                  {stat.value}
                </span>
                <span className="block text-sm text-light-foreground/70 dark:text-dark-foreground/7F0">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-effect animate-fade-in rounded-xl p-6 shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
              <p className="text-light-foreground/80 dark:text-dark-foreground/80">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;