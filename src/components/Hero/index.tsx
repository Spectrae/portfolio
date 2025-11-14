// src/components/Hero/index.tsx
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';

const socials = [
  { href: '#', icon: FiGithub, label: 'GitHub' },
  { href: '#', icon: FiLinkedin, label: 'LinkedIn' },
  { href: '#', icon: FiTwitter, label: 'Twitter' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] flex-col items-center justify-center pt-24 text-center"
    >
      <h1 className="text-5xl font-bold md:text-7xl">
        <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Rick Mondal
        </span>
      </h1>
      <p className="mt-4 text-xl text-light-foreground/80 dark:text-dark-foreground/80 md:text-2xl">
        Full-Stack Developer
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="rounded-full bg-light-primary px-6 py-3 font-semibold text-light-primary-foreground shadow-lg transition-transform hover:scale-105 dark:bg-dark-primary dark:text-dark-primary-foreground">
          View My Work
        </button>
        <button className="rounded-full border border-light-primary bg-transparent px-6 py-3 font-semibold text-light-primary transition-transform hover:scale-105 hover:bg-light-primary/10 dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-primary/10">
          Contact Me
        </button>
      </div>

      <div className="mt-8 flex gap-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-foreground/70 transition-colors hover:text-light-primary dark:text-dark-foreground/70 dark:hover:text-dark-primary"
          >
            <social.icon size={24} />
          </a>
        ))}
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <FiArrowDown size={24} className="text-light-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;