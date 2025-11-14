// src/components/Certifications/index.tsx
'use client';

import { certificationData } from '@/data/certifications';
import { CertificationCard } from './CertificationCard';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Certifications
      </h2>
      
      <motion.div 
        layout 
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {certificationData.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;