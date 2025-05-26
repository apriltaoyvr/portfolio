import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from './ModeToggle';

const mainLinks = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/projects',
    text: 'Projects',
  },
];

const FooterItems = () => {
  return (
    <footer>
      <ModeToggle />
      <Button variant='ghost' size='icon' asChild>
        <Link href='https://github.com/apriltaoyvr'>
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='size-[1.2rem]'
          >
            <title>GitHub</title>
            <path
              className='fill-current'
              d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
            />
          </svg>
        </Link>
      </Button>
      <Button variant='ghost' size='icon' asChild>
        <Link href='https://www.linkedin.com/in/apriltaoyvr/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 50 50'
            className='size-[1.2rem]'
          >
            <title>LinkedIn</title>
            <path
              className='fill-current'
              d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'
            ></path>
          </svg>
        </Link>
      </Button>
    </footer>
  );
};

export default function Navbar() {
  return (
    <nav
      className='md:bg-background sticky top-0 z-50 border-b px-2 py-2 backdrop-blur-lg'
      role='navigation'
    >
      {/* Desktop menu */}
      <div className='hidden flex-row place-items-center justify-between px-2 md:flex'>
        <main className='flex h-full flex-row place-items-center'>
          <section className='flex flex-row gap-2'>
            {mainLinks.map(({ href, text }) => (
              <Link
                href={href}
                className='hover:text-accent transition-colors'
                key={href}
              >
                {text}
              </Link>
            ))}
          </section>
        </main>
        <FooterItems />
      </div>
      {/* Mobile menu below */}
      <div className='flex flex-row place-items-center justify-between md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
              <AlignJustify className='size-[1.2rem]' />
              <span className='sr-only'>Activate navbar</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mx-2' align='center'>
            {mainLinks.map(({ href, text }) => (
              <DropdownMenuItem key={href}>
                <Link
                  href={href}
                  className='hover:text-accent transition-colors'
                >
                  {text}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <FooterItems />
      </div>
    </nav>
  );
}
