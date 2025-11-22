// src/data/certifications.ts
import { IconType } from 'react-icons';

// Icons
import { FaAws, FaRust } from 'react-icons/fa';
import { 
  SiSolidity, 
  SiGoogledrive, 
  SiKaggle,
  SiIbm
} from 'react-icons/si';

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
  Icon: IconType;
}

export const certificationData: Certification[] = [
  {
    title: 'Rust for Systems Programming',
    issuer: 'Linux Foundation',
    date: 'Nov 2025',
    credentialLink: '#',
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
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    credentialLink: '#',
    Icon: SiGoogledrive,
  },
  {
    title: 'Data Visualization',
    issuer: 'Kaggle',
    date: 'Oct 2025',
    credentialLink: '#',
    Icon: SiKaggle,
  },
  {
    title: 'Accelerating Deep Learning with GPUs',
    issuer: 'IBM',
    date: 'Nov 2025',
    credentialLink: '#',
    Icon: SiIbm,
  },
];
