// src/components/Certifications/CertificationCard.tsx
import { Certification } from '@/data/certifications';
import Link from 'next/link';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface CertificationCardProps {
  cert: Certification;
}

export const CertificationCard = ({ cert }: CertificationCardProps) => {
  const { title, issuer, date, credentialLink, Icon } = cert;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect group flex items-center gap-5 rounded-2xl p-5 shadow-sm transition-all hover:bg-white/80 dark:hover:bg-[#151e32]"
    >
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
        {Icon ? <Icon size={28} /> : <FiAward size={28} />}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="truncate text-lg font-semibold text-foreground">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{issuer}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{date}</span>
        </div>
      </div>

      <Link
        href={credentialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-transparent text-muted-foreground transition-colors hover:bg-primary hover:border-primary hover:text-white"
        aria-label={`Verify ${title}`}
      >
        <FiExternalLink />
      </Link>
    </motion.div>
  );
};