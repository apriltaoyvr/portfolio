import Image from "next/image";
import Selfie from '../../images/me.jpg';

export default function About() {
  return (
    <>
      <header className='' role='banner'>
        <h1 className='mb-0 text-start text-4xl'>About Me</h1>
        <article className='[&>*]:mb-2'>
          <p>
            My name is <strong>April</strong>. I'm someone passionate about web
            development, web design, and UI/UX.
          </p>
          <p>
            I got started by making personal themes for FoundryVTT and websites
            in CSS. Since then, I've been learning and growing as a developer
            and designer.{' '}
          </p>
          <p>
            What started as a desire to accommodate for my personal pet peeves
            became a passion to make the web more{' '}
            <strong className='text-inherit'>beautiful</strong>.
          </p>
        </article>
        <hr className='my-8 h-[1px] w-full' />
        <article className='[&>*]:mb-2'>
          <p>
            Aside from programming, some of my interests include: linguistics,
            psychology, dance, fashion, and cRPGs!
          </p>
        </article>
      </header>
      <hr className='mx-8 hidden min-h-[inherit] w-[1px] lg:block' />
      <section>
        <h2 className='mt-0'>Skills</h2>
        <span>I specialize in:</span>
        <ul className='bullet-list'>
          <li>React (Next.js)</li>
          <li>Typescript</li>
          <li>CSS Libraries (Tailwind, SCSS, CSS-in-JS)</li>
          <li>Component Libraries (MUI, Radix, Shadcn)</li>
          <li>UI/UX</li>
        </ul>
        <hr className='my-8 h-[1px] w-full' />
        <span>I am also familiar with:</span>
        <ul className='bullet-list'>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>PHP</li>
          <li>Symfony</li>
          <li>GraphQL</li>
          <li>Restful APIs</li>
          <li>Figma</li>
        </ul>
      </section>
    </>
  );
}
