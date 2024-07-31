import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Navbar() {
  return (
    <nav
      className='sticky top-0 z-50 border-b bg-light p-4 dark:bg-dark'
      role='navigation'
    >
      <ul className='flex flex-row place-items-center justify-between'>
        <li>
          <Link href='/' className='link'>
            Home
          </Link>
        </li>
        <li>
          <Link href='https://github.com/apriltaoyvr' className='link p-1'>
            Github
          </Link>
        </li>
      </ul>
    </nav>
  );
}
