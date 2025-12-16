import { motion } from 'framer-motion';

import { EASE } from '@/constants/animation';

interface HeroTitlesProps {
  titleParts?: string[];
  description?: string;
}

const containerVariants = {
  hidden: { filter: 'blur(10px)', opacity: 0, y: 50 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: EASE,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.8,
      ease: EASE,
    },
  },
};

export default function HeroTitles({
  titleParts = ['Automate', 'your', 'workflow', 'with AI'],
  description = 'No matter what problem you have, our AI can help you solve it.',
}: HeroTitlesProps) {
  return (
    <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {titleParts.map((text, index) => (
          <motion.span
            key={`${text}-${index}`}
            className="inline-block px-1 md:px-2 text-balance font-semibold"
            variants={childVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2, duration: 0.8, ease: EASE }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="mx-auto max-w-xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9 text-balance"
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        {description}
      </motion.p>
    </div>
  );
}
