'use client';
import { Image, Link } from '@nextui-org/react';
import ProjectCard from '@/components/ProjectCard';
import projects from './projects.json';

export default function Home() {
  return (
    <main className='mt-8 flex flex-col place-content-center justify-around gap-4'>
      <header className='min-w-full text-center'>
        <h1>Portfolio</h1>
      </header>
      <section className='mb-2 flex flex-col p-4'>
        <h2>Projects</h2>
        <div className='flex flex-wrap place-content-center place-items-center gap-2'>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
      <section className='mb-2 p-4 flex flex-col place-content-center place-items-center gap-2'>
        <h2>About Me</h2>
        <div className='grid grid-cols-2 gap-4'>
          <figure className='flex flex-col place-content-center place-items-center'>
            <Image
              src='https://res.cloudinary.com/dsbhmynmq/image/upload/v1668374078/April%20Tao/Images/me_fzw1n4.webp'
              width={300}
              alt='A photo of myself'
              shadow='sm'
              radius='lg'
              className='border-[1px] border-neutral-800/10 dark:border-neutral-100/10'
              isBlurred
            />
            <figcaption className='mt-2 text-sm'>
              Photo by Frank Sala
            </figcaption>
          </figure>
          <article>
            <section>
              <h3>Info</h3>
              <ul>
                <li>A developer from Vancouver, BC</li>
                <li>Passionate about design</li>
                <li>Big fan of pigeons, cats, and rats</li>
              </ul>
            </section>
            <section>
              <h3>Skills</h3>
              <section>
                <h4>Javascript</h4>
                <ul>
                  <li>ReactJS (NextJS)</li>
                  <li>Typescript</li>
                  <li>jQuery</li>
                </ul>
              </section>
              <section>
                <h4>Styling</h4>
                <ul>
                  <li>TailwindCSS</li>
                  <li>Styled Components</li>
                  <li>MUI</li>
                </ul>
              </section>
              <section>
                <h4>Other</h4>
                <ul>
                  <li>Astro</li>
                  <li>GraphQL</li>
                </ul>
              </section>
            </section>
          </article>
        </div>
      </section>
      <section></section>
      <footer className='flex max-h-min w-full place-content-center place-items-center border-t-[1px] border-black/10 p-4 font-sans text-sm dark:border-white/10'>
        <p>
          Brand icons by{' '}
          <Link href='https://simpleicons.org' size='sm' color='primary' isExternal>
            Simple Icons
          </Link>
        </p>
      </footer>
    </main>
  );
}
