import { motion } from 'framer-motion';

import { EASE } from '@/constants/animation';
import HeroVideo from './HeroVideo';

interface HeroImageProps {
  videoSrc?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
}

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1.2,
      ease: EASE,
    },
  },
};

export default function HeroImage({
  videoSrc = 'https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb',
  thumbnailSrc = '/dashboard.png',
  thumbnailAlt = 'Hero Video',
}: HeroImageProps) {
  return (
    <motion.div
      className="relative mt-10 mx-auto flex w-full items-center justify-center"
      variants={imageVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroVideo
        animationStyle="from-center"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt={thumbnailAlt}
      />
    </motion.div>
  );
}
