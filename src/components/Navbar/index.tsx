import Link from './Link';
import { ModeToggle } from './ModeToggle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  return (
    <nav
      className='sticky top-0 z-50 py-2 backdrop-blur-lg md:mb-2 md:px-2 md:backdrop-blur-sm'
      role='navigation'
    >
      <div className='hidden flex-row place-items-center justify-between md:flex'>
        <NavContent />
        <footer>
          <ModeToggle />
        </footer>
      </div>
      <div className='flex flex-row place-items-center justify-between md:hidden'>
        <header>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon'>
                <HamburgerMenuIcon className='h-[1.2rem] w-[1.2rem]' />
                <span className='sr-only'>Activate navbar</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='mx-2' align='center'>
              <DropdownMenuItem>
                <Link href='/'>Home</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/about'>About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/experience'>Experience</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='https://github.com/apriltaoyvr'>Github</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <footer>
          <ModeToggle />
        </footer>
      </div>
    </nav>
  );
}

const NavContent = () => {
  return (
    <>
      <header className='flex h-full flex-row place-items-center'>
        <Link href='/'>Home</Link>
        <hr className='mx-1 h-4 w-[1px]' aria-hidden={true} />
        <section className='flex flex-row'>
          <Link href='/about'>About</Link>
          <Link href='/experience'>Experience</Link>
        </section>
        <hr className='mx-1 h-4 w-[1px]' aria-hidden={true} />
        <Link href='https://github.com/apriltaoyvr'>Github</Link>
      </header>
    </>
  );
};
