import Link from 'next/link';

export default function Home() {
  return (
    <article className='flex flex-col'>
      <hgroup>
        <h1 className='mb-0 text-start'>Hello!</h1>
        <h2 className='mb-4 text-start font-normal'>
          I'm a <strong className="text-accent">full-stack developer</strong>.
        </h2>
      </hgroup>
      <span>
        My focus is on creating{' '}
        <Link
          href='/projects'
          className='hover:text-foreground/75 underline decoration-accent'
        >
          clean, interesting websites
        </Link>{' '}
        and having fun with them.
      </span>
    </article>
  );
}
