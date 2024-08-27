export default function Home() {
  return (
    <main className='flex min-h-[85vh] flex-col place-content-center place-items-center p-2'>
      <section className='flex flex-col place-content-start place-items-start gap-8'>
        <hgroup>
          <h1 className='mb-0'>Hello!</h1>
          <h2 className='mb-8 font-normal'>
            I'm a <strong>full-stack web developer</strong> and{' '}
            <strong>web designer</strong>.
          </h2>
          <span>
            My focus is on creating interesting, clean websites and having fun
            with them.
          </span>
        </hgroup>
      </section>
    </main>
  );
}
