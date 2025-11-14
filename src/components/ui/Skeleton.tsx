// src/components/ui/Skeleton.tsx
interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = '' }: SkeletonProps) => {
  return (
    <div
      className={`h-4 w-full animate-pulse rounded-md bg-light-foreground/10 dark:bg-dark-foreground/10 ${className}`}
    />
  );
};

export default Skeleton;