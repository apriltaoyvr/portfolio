'use client';
import { Image, Link } from '@nextui-org/react';
import NextImage from "next/image";
import ProjectCard from '@/components/ProjectCard';
import liveSites from '@/data/live.json';
import otherProjects from '@/data/other.json';
import assisted from '@/data/assisted.json';

export default function Home() {
  return (
    <main className='pt-8 flex flex-col place-content-center place-items-center justify-around gap-4'>
      <header className='flex place-content-center'>
        <div className='bg-background/70 border rounded-lg border-divider backdrop-blur-lg flex md:flex-row sm:flex-col sm:flex-wrap place-content-center place-items-start gap-4 p-8 max-h-fit'>

          <figure className='flex flex-col place-content-center place-items-center mb-2'>
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
            <figcaption className='mt-2 text-sm text-inherit/75'>
              Photo by <Link href='https://www.franciscoleanahidalgo.com/' rel='_noreferer' className='text-sm'>Francisco Leana</Link>
            </figcaption>
          </figure>
          <article className='flex flex-col place-content-start text-justify leading-12 gap-2 max-w-sm p-2'>
            <h2>About Me</h2>
            <p>Hey, I'm <strong className='text-primary'>April Tao</strong>!</p>
            <p>I'm a fullstack web developer that likes to tinker.</p>
            <p>Web development has been my hobby for about <strong>2 years</strong> now. I got started making user themes for websites and editing CSS themes on Electron-based applications.</p>
            <p>I gradually got into backend elements via wanting to make my own APIs for some games I enjoy. Now I make little databases and APIs for fun.</p>
            <p>Other than that, I love pigeons, cats, and rats. I do some modelling on the side, and I love to dance.</p>
          </article>
        </div>
      </header>
      <main className='bg-background/70 border rounded-lg border-divider backdrop-blur-lg max-w-[80%]'>
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
      </main>
      <footer className='flex max-h-min w-full place-content-center place-items-center border-t-[1px] border-black/10 p-4 font-sans text-sm dark:border-white/10 bg-background/25'>
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
