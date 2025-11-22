// src/components/Hero/index.tsx
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
      <div className="animate-fade-in space-y-6 max-w-3xl mx-auto">

        {/* Green Badge */}
        <div className="inline-block rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-green-500/20 mb-4">
          Available for work
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Hi, I'm <span className="text-gradient">Rick Mondal</span>
        </h1>
        
        <p className="text-xl font-medium text-foreground/80 sm:text-2xl">
          Full-Stack Developer
        </p>
        
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          I build accessible, pixel-perfect, and performant web experiences. 
          Specializing in the React ecosystem, Systems Programming, and modern UI design.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="#projects">
            <Button size="lg">View Work</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg">Contact Me</Button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          {[
            { icon: FiGithub, href: 'https://github.com/Spectrae' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/rickmondal2004' },
            { icon: FiTwitter, href: 'https://twitter.com/imrickmondal' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary hover:scale-110"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <FiArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
