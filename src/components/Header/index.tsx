// src/components/Header/index.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { FiMenu } from 'react-icons/fi';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 z-50 w-[90%] max-w-3xl -translate-x-1/2 transform rounded-full border-white/20 px-6 py-3 transition-all duration-300
        ${isScrolled ? 'glass-effect shadow-lg' : 'border-transparent'}
      `}
      >
        <nav className="flex items-center justify-between">

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-light-foreground/70 hover:text-light-foreground dark:text-dark-foreground/70 dark:hover:text-dark-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 md:hidden"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
};

export default Header;
