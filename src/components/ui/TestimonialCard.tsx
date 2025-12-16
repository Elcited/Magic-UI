import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export default function TestimonialCard({
  name,
  role,
  img,
  description,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col w-full p-4 mb-4 justify-between items-center gap-6 rounded-xl break-inside-avoid cursor-pointer',
        'border border-neutral-200 bg-white',
        'dark:bg-black dark:[border:1px_solid_rgba(255,255,255, 0.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
        className
      )}
      {...props}
    >
      <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
        {description}
        <div className="flex py-1">
          <Star className="size-4 text-yellow-500 fill-yellow-500" />
          <Star className="size-4 text-yellow-500 fill-yellow-500" />
          <Star className="size-4 text-yellow-500 fill-yellow-500" />
          <Star className="size-4 text-yellow-500 fill-yellow-500" />
          <Star className="size-4 text-yellow-500 fill-yellow-500" />
        </div>
      </div>

      <div className="flex justify-start items-center w-full select-none gap-5">
        <img
          width={40}
          height={40}
          src={img || ''}
          alt={name}
          className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
        />

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
          <p className="text-xs font-normal text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
