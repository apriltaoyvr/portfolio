export default function Home() {
  return (
    <article className='flex flex-col'>
      <hgroup>
        <h1 className='mb-0 text-start'>Hello!</h1>
        <h2 className='mb-4 text-start font-normal'>
          I'm a <strong className="text-accent">full-stack web developer</strong> specializing in{' '}
          <strong className="text-sky-500">React</strong>.
        </h2>
      </hgroup>
      <span>
        My focus is on creating interesting, clean websites and having fun with
        them.
      </span>
    </article>
  );
}
