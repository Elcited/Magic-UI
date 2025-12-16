import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import Section from '../Section';
import { buttonVariants } from '@/constants/cva';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/config';
import useWindowSize from '@/lib/hooks/use-window-size';
import Label from '../ui/Label';
import Switch from '../ui/Switch';

export default function Price() {
  const [isMonthly, setIsMonthly] = useState(true);
  const { isDesktop } = useWindowSize();

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Section title="Pricing" subtitle={`Choose the plan that's right for you.`}>
      <div className="flex justify-center mb-10">
        <span className="mr-2 font-semibold">Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch checked={!isMonthly} onCheckedChange={handleToggle} />
          </Label>
        </label>
        <span className="ml-2 font-semibold">Yearly</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {siteConfig.pricing.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: 0,
                    opacity: 1,
                    x:
                      index === siteConfig.pricing.length - 1
                        ? -30
                        : index === 0
                        ? 30
                        : 0,
                    scale:
                      index === 0 || index === siteConfig.pricing.length - 1
                        ? 0.94
                        : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: 'spring',
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl border bg-background text-center lg:flex lg:flex-col lg:justify-center relative p-6`,
              plan.isPopular ? 'border-primary border-2' : 'border-border',
              index === 0 || index === siteConfig.pricing.length - 1
                ? 'z-0 transform-[translateZ(-50px)] rotate-y-10'
                : 'z-10',
              index === 0 && 'origin-right',
              index === siteConfig.pricing.length - 1 && 'origin-left'
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-primary px-2 py-.5 rounded-bl-xl rounded-tr-xl flex items-center">
                <FaStar className="text-white" />
                <span className="text-white ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>
            )}

            <div>
              <p className="text-base text-muted-foreground font-semibold mb-6">
                {plan.name}
              </p>
              <p className="flex justify-center items-center gap-x-2">
                <span className="text-5xl text-foreground font-bold tracking-tight">
                  {isMonthly ? plan.price : plan.yearlyPrice}
                </span>
                {plan.period !== 'Next 3 months' && (
                  <span className="text-sm font-semibold text-muted-foreground tracking-tight leading-6">
                    / {plan.period}
                  </span>
                )}
              </p>

              <p className="text-xs text-muted-foreground leading-5">
                {isMonthly ? 'billed monthly' : 'billed annually'}
              </p>

              <ul className="flex flex-col gap-2 mt-5">
                {plan.features.map((feature, index) => (
                  <li key={index} className="list-none flex items-center">
                    <Check className="text-primary h-4 w-4 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-4" />

              <a
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: 'outline',
                  }),
                  'group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter',
                  'transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white',
                  plan.isPopular
                    ? 'bg-primary text-white'
                    : 'bg-white text-black'
                )}
              >
                {plan.buttonText}
              </a>

              <p className="mt-6 text-xs text-muted-foreground leading-5">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
