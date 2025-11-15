// src/components/Footer/index.tsx
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const socials = [
  { href: '#', icon: FiGithub, label: 'GitHub' },
  { href: '#', icon: FiLinkedin, label: 'LinkedIn' },
  { href: '#', icon: FiTwitter, label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="border-t border-light-foreground/10 py-8 dark:border-dark-foreground/10">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between px-4 md:flex-row">
        <p className="text-sm text-light-foreground/70 dark:text-dark-foreground/70">
          &copy; {new Date().getFullYear()} Rick Mondal. All rights reserved.
        </p>
        <div className="mt-4 flex gap-6 md:mt-0">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-foreground/70 transition-colors hover:text-light-primary dark:text-dark-foreground/70 dark:hover:text-dark-primary"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;