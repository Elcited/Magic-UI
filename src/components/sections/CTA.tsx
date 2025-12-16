import { Icons } from '@components/Icons';
import Section from '../Section';
import { buttonVariants } from '@/constants/cva';
import { cn } from '@/lib/utils';

export default function CTA() {
  return (
    <Section
      id="cta"
      title="Ready to get started?"
      subtitle="Start your free trial today."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <a
          href="/signup"
          className={cn(
            buttonVariants({
              variant: 'default',
            }),
            'w-full flex gap-2 sm:w-auto text-background'
          )}
        >
          <Icons.logo className="w-6 h-6" />
          Get started for free
        </a>
      </div>
    </Section>
  );
}
