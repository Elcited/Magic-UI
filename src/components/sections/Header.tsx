import { siteConfig } from '@/lib/config';
import { Icons } from '../Icons';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/constants/cva';
import Menu from '../Menu';
import Drawer from '../Drawer';
import { useEffect, useState } from 'react';

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 py-2 bg-background/60 backdrop-blur">
      <div className="flex justify-between items-center container mx-auto">
        <a
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Icons.logo className="w-auto h-10" />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </a>

        <div className="hidden lg:block">
          <div className="flex items-center">
            <nav className="mr-10">
              <Menu />
            </nav>

            <div className="flex gap-2">
              <a
                href="/login"
                className={buttonVariants({ variant: 'outline' })}
              >
                Login
              </a>

              <a
                href="/signup"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'w-full sm:w-auto text-background flex gap-2'
                )}
              >
                <Icons.logo className="h-6 w-6" />
                Get Started for Free
              </a>
            </div>
          </div>
        </div>

        <div className="mt-2 cursor-pointer block lg:hidden">
          <Drawer />
        </div>
      </div>

      <hr
        className={cn(
          'absolute w-full bottom-0 transition-opacity duration-300 ease-in-out',
          addBorder ? 'opacity-100' : 'opacity-0'
        )}
      />
    </header>
  );
}
