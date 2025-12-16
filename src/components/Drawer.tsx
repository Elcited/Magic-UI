import { IoMenuSharp } from 'react-icons/io5';
import { Icons } from './Icons';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from './ui/Drawer';
import { buttonVariants } from '@/constants/cva';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

export default function DrawerAll() {
  return (
    <Drawer>
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <div className="">
            <a
              href="/"
              title="brand-logo"
              className="relative mr-6 flex items-center space-x-2"
            >
              <Icons.logo className="w-auto h-10" />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </a>
          </div>
          <nav>
            <ul className="mt-7 text-left">
              {siteConfig.header.map((item, index) => (
                <li key={index} className="my-3">
                  {item.trigger ? (
                    <span className="font-semibold">{item.trigger}</span>
                  ) : (
                    <a href={item.href || ''} className="font-semibold">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <a href="/login" className={buttonVariants({ variant: 'outline' })}>
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
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
