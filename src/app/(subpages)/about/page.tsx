import Image from 'next/image';
import Selfie from './me.jpg';

export default function About() {
  return (
    <>
      <article className='*:mb-4'>
        <section>
          <h1 className='text-start text-4xl'>About Me</h1>
          <article>
            <section className='*:mb-2'>
              <p>
                Hi, I’m April. I'm a full-stack developer with a passion for
                crafting intuitive and visually appealing web experiences.
              </p>
              <p>
                My interest in web development started with a very simple pet
                peeve: I hated how many sites had light themes but no
                alternatives. So I started experimenting with CSS to create
                custom themes that suited my tastes. That initial tinkering
                sparked a deeper passion for building thoughtful, user-friendly
                designs and functional web apps.
              </p>
              <p>
                What began as a personal project quickly evolved into a full
                commitment to learning more about web technologies and design
                principles.
              </p>
              <p>
                Outside of coding, I’m into linguistics, psychology, dance,
                fashion, and classic role-playing games (cRPGs). I’m also a big
                fan of cats and pigeons. I find them adorable.
              </p>
            </section>
          </article>
        </section>
        <section className='*:not-last:mb-2'>
          <h2 className='mt-0 text-start'>Skills</h2>
          <section>
            <h3>Notable:</h3>
            <ul className='*:marker:text-muted-foreground ml-6 list-disc *:mt-1'>
              <li>React (Next.js)</li>
              <li>Typescript</li>
              <li>PostgreSQL</li>
              <li>REST APIs</li>
              <li>CSS Libraries (Tailwind, SCSS, CSS-in-JS)</li>
              <li>Component Libraries (MUI, Radix, Shadcn)</li>
            </ul>
          </section>
          <section>
            <h3>Other:</h3>
            <ul className='*:marker:text-muted-foreground ml-6 list-disc *:mt-1'>
              <li>Python</li>
              <li>PHP</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>Astro</li>
              <li>Figma</li>
            </ul>
          </section>
        </section>
      </article>
      <figure>
        <Image
          src={Selfie}
          alt='A photo of myself taken by Giorgio Verzoletto'
          className='rounded-xl'
        />
        <figcaption className='mt-2 text-sm'>
          A photo of myself taken by Giorgio Verzoletto
        </figcaption>
      </figure>
    </>
  );
}
