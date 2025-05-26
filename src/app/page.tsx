export default function Home() {
  return (
    <main className='flex min-h-[85vh] flex-col place-content-center place-items-center p-2'>
      <section className='flex flex-col place-content-start place-items-start gap-2'>
        <hgroup>
          <h1 className='mb-0 text-start'>Hello!</h1>
          <h2 className='mb-8 text-start font-normal'>
            I'm a <strong>full-stack web developer</strong> specializing in{' '}
            <strong>React</strong>.
          </h2>
        </hgroup>
        <span>
          My focus is on creating interesting, clean websites and having fun
          with them.
        </span>
      </section>
    </main>
  );
}
