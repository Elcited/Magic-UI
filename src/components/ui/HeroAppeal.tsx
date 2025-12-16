import { motion } from 'framer-motion';

import { EASE } from '@/constants/animation';

interface HeroAppealProps {
  href?: string;
  announcement?: string;
  title?: string;
}

export default function HeroAppeal({
  href = '/blog/introducing-acme-ai',
  announcement = '📣 Announcement',
  title = 'Introducing Acme.ai',
}: HeroAppealProps) {
  return (
    <motion.a
      href={href}
      className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre"
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: EASE,
      }}
    >
      <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
        {announcement}
      </div>
      <p className="text-xs font-medium text-primary sm:text-sm flex justify-center items-center">
        {title}
        <svg
          width="12"
          height="12"
          className="ml-1"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
            fill="hsl(var(--primary))"
          />
        </svg>
      </p>
    </motion.a>
  );
}
