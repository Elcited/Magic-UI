import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { Icons } from '../Icons';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-5 py-16 sm:px-10 ">
        <a href="/" title={siteConfig.name}>
          <Icons.logo className="w-auto h-10" />

          <span className="text-xl font-bold">{siteConfig.name}</span>
        </a>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-8">
          {siteConfig.footer.map((section, index) => (
            <div key={index} className="mb-5">
              <h2 className="font-semibold">{section.title}</h2>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index} className="my-3">
                    <a
                      href={link.href}
                      className="group inline-flex justify-start items-center gap-1 text-muted-foreground cursor-pointer transition-all duration-200 hover:text-foreground hover:opacity-90"
                    >
                      {link.icon && link.icon}
                      {link.text}
                      <ChevronRight className="w-4 h-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-6xl w-full h-full mx-auto border-t py-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-1">
          <span className="text-sm tracking-tight text-foreground">
            Copyright © {new Date().getFullYear()}{' '}
            <a href="/" className="cursor-pointer">
              {siteConfig.name}
            </a>
            - {siteConfig.description}
          </span>
          <ul className="flex justify-start md:justify-end text-sm tracking-tight text-foreground">
            <li className="mr-3 md:mx-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
            <li className="mr-3 md:mx-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
