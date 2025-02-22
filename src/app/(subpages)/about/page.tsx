import Image from 'next/image';
import Selfie from './me.jpg';

export default function About() {
  return (
    <>
      <header role='banner'>
        <h1 className='text-start text-4xl'>About Me</h1>
        <figure>
          <Image
            src={Selfie}
            alt='A photo of myself taken by Giorgio Verzoletto'
          />
          <figcaption className='text-sm text-center mt-2'>
            A photo of myself taken by Giorgio Verzoletto
          </figcaption>
        </figure>
      </header>
      <hr className='mx-8 hidden min-h-[inherit] w-[1px] lg:block' />
      <section>
        <h2 className='text-start text-4xl mb-2'>Biography</h2>
        <article>
          <section className='*:mb-2'>
            <p>
              My name is <strong>April</strong>. I'm a full-stack developer passionate about
              web development and design.
            </p>
            <p>
              My interest in web development began by tinkering with CSS. I hate(d) how many sites and applications were light-mode only. So I decided to create some personal themes and the rest is history. {' '}
            </p>
            <p>
              What started as a desire to accommodate for my personal pet peeves
              became a passion to learn and create.
            </p>
            <p>
              Aside from programming, some of my interests include: linguistics,
              psychology, dance, fashion, and cRPGs. I also love cats and pigeons :)
            </p>
          </section>
        </article>
      </section>
      <hr className='mx-8 hidden min-h-[inherit] w-[1px] lg:block' />
      <section className='*:not-last:mb-2'>
        <h2 className='mt-0'>Skills</h2>
        <section >
          <span>I specialize in:</span>
          <ul className='bullet-list'>
            <li>React (Next.js)</li>
            <li>Typescript</li>
            <li>CSS Libraries (Tailwind, SCSS, CSS-in-JS)</li>
            <li>Component Libraries (MUI, Radix, Shadcn)</li>
            <li>UI/UX</li>
          </ul>
        </section>
        <section>
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
      </section>
    </>
  );
}
