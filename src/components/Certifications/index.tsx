// src/components/Certifications/index.tsx
'use client';

import { useState } from 'react';
import { certificationData } from '@/data/certifications';
import { CertificationCard } from './CertificationCard';
import { Button } from '@/components/ui/Button';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const DEFAULT_COUNT = 4;

const Certifications = () => {
  const [visibleCount, setVisibleCount] = useState(DEFAULT_COUNT);
  const hasMore = visibleCount < certificationData.length;

  const handleToggle = () => {
    if (hasMore) {
      setVisibleCount(prev => prev + DEFAULT_COUNT);
    } else {
      setVisibleCount(DEFAULT_COUNT);
      document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {certificationData.slice(0, visibleCount).map((cert, i) => (
            <CertificationCard key={i} cert={cert} />
          ))}
        </div>

        {certificationData.length > DEFAULT_COUNT && (
          <div className="mt-10 flex justify-center">
            <Button 
              variant="ghost" 
              onClick={handleToggle}
              className="gap-2"
            >
              {hasMore ? (
                <>Show More Credentials <FiChevronDown /></>
              ) : (
                <>Show Less <FiChevronUp /></>
              )}
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;
