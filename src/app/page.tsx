export default function Home() {
  return (
    <main className='flex flex-col place-content-center place-items-center pt-8 site-container'>
      <header className='border-coloured border grid grid-cols-3'>
        <article className='flex flex-col gap-2 m-4 col-span-2 [&>p]:max-w-[32ch]'>
          <p>Hey, I'm April. </p>
          <p>I'm a <strong>full-stack web developer</strong> with <strong>2 years</strong> of experience in:</p>
          <ul className='ml-6 list-disc [&>li]:mt-1'>
            <li>React (Next.js)</li>
            <li>Typescript</li>
            <li>PostgreSQL</li>
            <li>UI/UX</li>
          </ul>
          <p>Aside from web development, I have a love for pigeons, cats, and rats 🕊️</p>
        </article>
        <figure className='dark:bg-light bg-dark'/>
      </header>
      <hr className='border-b-1 border-dashed my-8 w-screen border-coloured'/>
      <section>
        <h2>Live Sites</h2>
        <h2>Contributed To</h2>
        <h2>Other</h2>
      </section>
    </main>
  );
}
