import Link from './Link';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 mb-2 px-2 py-2' role='navigation'>
      <div className='flex flex-row place-items-center justify-between'>
        <header className='flex h-full flex-row place-items-center'>
          <Link href='/'>Home</Link>
          <hr 
            className={`mx-1 min-h-4 border-l`} 
            aria-hidden={true}
          />
          <section className='flex flex-row'>
            <Link href='/about'>About</Link>
            <Link href='/experience'>Experience</Link>
          </section>
          <hr
            className={`mx-1 min-h-4 border-l`}
            aria-hidden={true}
          />
          <Link href='https://github.com/apriltaoyvr'>Github</Link>
        </header>
        <footer>
          <ModeToggle/>
        </footer>
      </div>
    </nav>
  );
}
