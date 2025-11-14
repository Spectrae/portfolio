// src/data/certifications.ts
import { IconType } from 'react-icons';
// Import icons from react-icons (e.g., FaAws, SiSolidity, etc.)
import { FaAws, FaRust } from 'react-icons/fa';
import { SiSolidity, SiGoogledrive } from 'react-icons/si'; // 1. Imported a new icon

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
  Icon: IconType; // This lets you pass an icon component
}

export const certificationData: Certification[] = [
  {
    title: 'Rust for Systems Programming',
    issuer: 'Linux Foundation',
    date: 'Nov 2025',
    credentialLink: '#', // Replace '#' with your actual link
    Icon: FaRust,
  },
  {
    title: 'Certified Solidity Developer',
    issuer: 'CryptoDevs',
    date: 'Oct 2025',
    credentialLink: '#',
    Icon: SiSolidity,
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Sep 2025',
    credentialLink: '#',
    Icon: FaAws,
  },
  // 2. Added the new certification object below
  {
    title: 'Google Cloud Professional', // Example Title
    issuer: 'Google Cloud', // Example Issuer
    date: 'Aug 2025',
    credentialLink: '#',
    Icon: SiGoogledrive, // 3. Used the new icon
  },
  // Add more certifications here
];