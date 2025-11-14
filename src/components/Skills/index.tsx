// src/components/Skills/index.tsx
const skillCategories = {
  Frontend: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
  ],
  'Backend & Systems': ['Node.js', 'Rust', 'C', 'Linux', 'Docker'],
  'Databases & Tools': ['PostgreSQL', 'MongoDB', 'Git', 'Jest', 'Playwright'],
  'Exploring': ['Web3', 'Solidity', 'Quantum Computing'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">My Toolkit</h2>
      <div className="rounded-xl bg-light-card p-8 shadow-lg dark:bg-dark-card">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-4 text-xl font-semibold text-light-primary dark:text-dark-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-light-primary/10 px-3 py-1 text-sm font-medium text-light-primary dark:bg-dark-primary/10 dark:text-dark-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;