// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    github: string;
    demo: string;
  };
}

export const projectData: Project[] = [
  {
    title: 'Kernel Module in Rust',
    description:
      'A proof-of-concept Linux kernel module written in Rust, exploring kernel-level programming.',
    image: 'https://images.unsplash.com/photo-1640552435845-d65c23b75934?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Rust', 'Linux Kernel', 'C'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'NeuroSymbolic AI Chatbot',
    description:
      'A research project combining neural networks with symbolic logic for more explainable AI.',
    image: 'https://images.unsplash.com/photo-1640552435845-d65c23b75934?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Python', 'PyTorch', 'NeuroSymbolic AI'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'Full-Stack Portfolio',
    description:
      'This very portfolio, built with Next.js App Router, Tailwind, and TypeScript.',
    image: 'https://images.unsplash.com/photo-1640552435845-d65c23b75934?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'Web3 dApp',
    description:
      'A decentralized application for tracking assets on the Ethereum blockchain.',
    image: 'https://images.unsplash.com/photo-1640552435845-d65c23b75934?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Solidity', 'React', 'Web3.js'],
    links: { github: '#', demo: '#' },
  },
  // Add more projects here
];