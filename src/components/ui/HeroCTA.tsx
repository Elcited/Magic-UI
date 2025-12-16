import { motion } from 'framer-motion';

import { EASE } from '@/constants/animation';
import { buttonVariants } from '@/constants/cva';
import { cn } from '@/lib/utils';
import { Icons } from '../Icons';

interface HeroCTAProps {
  ctaText?: string;
  subText?: string;
  href?: string;
}

export default function HeroCTA({
  ctaText = 'Get started for free',
  subText = '7 day free trial. No credit card required.',
  href = '/signup',
}: HeroCTAProps) {
  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.5,
          ease: EASE,
        }}
      >
        <a
          href={href}
          className={cn(
            buttonVariants({ variant: 'default' }),
            'w-full sm:w-auto text-background flex gap-2'
          )}
        >
          <Icons.logo className="h-6 w-6" />
          {ctaText}
        </a>
      </motion.div>

      <motion.p
        className="mt-5 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.5,
        }}
      >
        {subText}
      </motion.p>
    </>
  );
}
