import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from './Link';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 mb-2 px-2 py-2' role='navigation'>
      <ul className='flex flex-row place-items-center justify-between'>
        <header className='flex h-full flex-row place-items-center'>
          <Link href='/'>Home</Link>
          <hr className={`aria-hidden='true' mx-1 min-h-4 border-l`} />
          <section className='flex flex-row'>
            <Link href='/about'>About</Link>
            <Link href='/experience'>Experience</Link>
          </section>
          <hr className={`aria-hidden='true' mx-1 min-h-4 border-l`} />
          <Link href='https://github.com/apriltaoyvr'>Github</Link>
        </header>
        <footer></footer>
      </ul>
    </nav>
  );
}
