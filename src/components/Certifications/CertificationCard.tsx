// src/components/Certifications/CertificationCard.tsx
import { Certification } from '@/data/certifications';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface CertificationCardProps {
  cert: Certification;
}

export const CertificationCard = ({ cert }: CertificationCardProps) => {
  const { title, issuer, date, credentialLink, Icon } = cert;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-effect group flex items-start gap-4 rounded-xl p-5 shadow-lg"
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <Icon className="h-10 w-10 text-light-primary dark:text-dark-primary" />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-light-foreground/80 dark:text-dark-foreground/80">
          {issuer}
        </p>
        <p className="mb-2 text-xs text-light-foreground/60 dark:text-dark-foreground/60">
          {date}
        </p>
        <Link
          href={credentialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${title} credential`}
          className="flex items-center gap-1 text-sm font-medium text-light-primary transition-colors hover:text-light-primary/80 dark:text-dark-primary dark:hover:text-dark-primary/80"
        >
          View Credential
          <FiExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  );
};