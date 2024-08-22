export default function About() {
  return (
    <main className='flex min-h-[85vh] flex-row flex-wrap place-content-start place-items-start gap-8 p-2'>
      <header className='' role='banner'>
        <h1 className='mb-0 text-start'>About Me</h1>
        <article className='[&>*]:mb-2'>
          <p>
            My name is <strong>April</strong>. I'm someone passionate about web
            development, web design, and UI/UX.
          </p>
          <p>Two things motivated me to become a web developer:</p>
          <ul className='bullet-list'>
            <li>Ugly websites</li>
            <li>
              Sites that are purely light <em className='text-inherit'>or</em>{' '}
              dark mode
            </li>
          </ul>
          <p>
            I got started by making personal themes for FoundryVTT and websites
            in CSS. Since then, I've been learning and growing as a developer
            and designer.{' '}
          </p>
          <p>
            What started as a desire to accomodate for my personal pet peeves
            became a passion to make the web more{' '}
            <strong className='text-inherit'>beautiful</strong>.
          </p>
        </article>
        <hr className='my-8 w-[50px] border-b' />
        <article className='[&>*]:mb-2'>
          <p>
            Aside from programming, some of my interests include: linguistics,
            psychology, dance, fashion, and cRPGs!
          </p>
        </article>
      </header>
      <section>
        <h2>Skills</h2>
        <span>I specialize in:</span>
        <ul className='bullet-list'>
          <li>React (Next.js)</li>
          <li>Typescript</li>
          <li>CSS Libraries (Tailwind, SCSS, CSS-in-JS)</li>
          <li>Component Libraries (MUI, Radix, Shadcn)</li>
          <li>UI/UX</li>
        </ul>
        <span>I am also familiar with:</span>
        <ul className='bullet-list'>
          <li>Node.js</li>
          <li>APIs</li>
          <li>GraphQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Figma</li>
        </ul>
      </section>
      <section>
        <h2>Fun facts</h2>
        <ul className='bullet-list'>
          <li>I love cats, rats, pigeons, and raccoons</li>
        </ul>
      </section>
    </main>
  );
}
