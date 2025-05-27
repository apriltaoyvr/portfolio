export default function Home() {
  return (
    <article className='flex flex-col gap-4'>
      <hgroup>
        <h1 className='mb-0 text-start'>Hello!</h1>
        <h2 className='mb-8 text-start font-normal'>
          I'm a <strong>full-stack web developer</strong> specializing in{' '}
          <strong>React</strong>.
        </h2>
      </hgroup>
      <span>
        My focus is on creating interesting, clean websites and having fun with
        them.
      </span>
    </article>
  );
}
