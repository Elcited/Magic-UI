import HeroAppeal from '../ui/HeroAppeal';
import HeroCTA from '../ui/HeroCTA';
import HeroImage from '../ui/HeroImage';
import HeroTitles from '../ui/HeroTitles';

interface HeroProps {
  appealProps?: {
    href?: string;
    announcement?: string;
    title?: string;
  };
  titlesProps?: {
    titleParts?: string[];
    description?: string;
  };
  ctaProps?: {
    ctaText?: string;
    subText?: string;
  };
  imageProps?: {
    videoSrc?: string;
    thumbnailSrc?: string;
    thumbnailAlt?: string;
  };
}

export default function Hero({
  appealProps,
  titlesProps,
  ctaProps,
  imageProps,
}: HeroProps) {
  return (
    <section id="hero">
      <div className="relative w-full flex flex-col items-center justify-start px-4 pt-32 lg:px-8">
        <HeroAppeal {...appealProps} />
        <HeroTitles {...titlesProps} />
        <HeroCTA {...ctaProps} />
        <HeroImage {...imageProps} />
      </div>
    </section>
  );
}
