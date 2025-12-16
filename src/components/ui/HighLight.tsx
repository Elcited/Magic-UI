import { cn } from '@/lib/utils';

interface HighLightProps {
  children: React.ReactNode;
  className?: string;
}

export default function HighLight({ children, className }: HighLightProps) {
  return (
    <span
      className={cn(
        'bg-primary/20 p1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary',
        className
      )}
    >
      {children}
    </span>
  );
}
