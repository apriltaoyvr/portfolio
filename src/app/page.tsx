'use client';
import { Image, Link } from '@nextui-org/react';
import NextImage from "next/image";
import ProjectCard from '@/components/ProjectCard';
import liveSites from '@/data/live.json';
import otherProjects from '@/data/other.json';
import assisted from '@/data/assisted.json';

export default function Home() {
  return (
    <main className='pt-8 flex flex-col place-content-center justify-around gap-4'>
      <header className='min-w-full text-center'>
        <h1>Portfolio</h1>
      </header>
      <section className='mb-2 flex flex-col p-4'>
        <h2>Sites</h2>
        <div className='flex flex-wrap place-content-center place-items-center gap-2'>
          {liveSites.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
      <section className='mb-2 flex flex-col p-4'>
        <h2>Other Projects</h2>
        <div className='flex flex-wrap place-content-center place-items-center gap-2'>
          {otherProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
      <section className='mb-2 flex flex-col p-4'>
        <h2>Assisted In</h2>
        <div className='flex flex-wrap place-content-center place-items-center gap-2'>
          {assisted.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
      <section className='mb-2 flex flex-col place-content-center place-items-center gap-2 p-4'>
        <h2>About Me</h2>
        <div className='md:grid md:grid-cols-2 gap-4 sm:flex sm:flex-col sm:flex-wrap'>
          <figure className='flex flex-col flex-wrap place-content-center place-items-center mb-2'>
            <Image
              src='/me.jpg'
              as={NextImage}
              height={1108}
              width={1292}
              alt='A photo of myself'
              shadow='sm'
              radius='lg'
              sizes="(max-width: 768px) 25vw, 33vw"
              className='border-[1px] max-w-sm border-neutral-800/10 dark:border-neutral-100/10'
              isBlurred
            />
            <figcaption className='mt-2 text-sm'>
              Photo by Francisco Leana
            </figcaption>
          </figure>
          <article className='mb-2'>
            <section className='list'>
              <h3>Info</h3>
              <ul>
                <li>Passionate about design</li>
                <li>Big fan of pigeons, cats, and rats</li>
              </ul>
            </section>
            <section>
              <h3>Skills</h3>
              <section className='list'>
                <h4>Javascript</h4>
                <ul>
                  <li>ReactJS (NextJS)</li>
                  <li>Typescript</li>
                  <li>jQuery</li>
                </ul>
              </section>
              <section className='list'>
                <h4>Styling</h4>
                <ul>
                  <li>TailwindCSS</li>
                  <li>Styled Components</li>
                  <li>MUI</li>
                </ul>
              </section>
              <section className='list'>
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
          <Link
            href='https://simpleicons.org'
            size='sm'
            color='primary'
            isExternal
          >
            Simple Icons
          </Link>
        </p>
      </footer>
    </main>
  );
}
