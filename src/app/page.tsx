'use client';
import { Image, Link, Divider } from '@nextui-org/react';
import NextImage from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import liveSites from '@/data/live.json';
import miscProjects from '@/data/other.json';
import assisted from '@/data/assisted.json';

export default function Home() {
  return (
    <main className='flex flex-col place-content-center place-items-center pt-8'>
      <main className='flex w-full place-content-center'>
        <div className='flex max-h-fit flex-col flex-wrap place-content-center place-items-start gap-4 rounded-lg border border-divider bg-background/70 p-8 backdrop-blur-lg md:flex-row'>
          <figure className='mb-2 hidden flex-col place-content-center place-items-center md:flex'>
            <Image
              src='/me.jpg'
              as={NextImage}
              height={2217}
              width={1584}
              alt='A photo of myself'
              shadow='sm'
              radius='lg'
              sizes='(max-width: 768px) 25vw, 33vw'
              className='max-w-sm border-[1px] border-neutral-800/10 dark:border-neutral-100/10'
              isBlurred
            />
            <figcaption className='text-inherit/75 mt-2 text-sm'>
              Photo by{' '}
              <Link
                href='https://www.franciscoleanahidalgo.com/'
                rel='_noreferer'
                className='text-sm'
              >
                Francisco Leana
              </Link>
            </figcaption>
          </figure>
          <article className='leading-12 flex max-w-sm flex-col place-content-start gap-2 p-2 text-justify'>
            <h2>About Me</h2>
            <p>
              Hey, I&apos;m <strong>April</strong>!
            </p>
            <p>
              A fullstack web developer specializing in <strong>React</strong>. Web development a passion of mine for <strong>2 years</strong>{' '}
              now.
            </p>
            <p>
               I started with making user themes for websites and editing
              CSS themes for sites and Electron-based applications, then
              transitioned into creating sites.
            </p>
            <p>
              Other than that, I love pigeons, cats, and rats. I do some
              modelling on the side, and I love to dance.
            </p>
          </article>
        </div>
      </main>
      <Divider orientation='horizontal' className='mt-8' />
      <main className='flex max-w-[80%] flex-col place-content-center place-items-center justify-around gap-4 p-4'>
        <div className='flex flex-col gap-2'>
          <section className='site-container'>
            <h2>Sites</h2>
            <div className='flex flex-wrap place-content-center place-items-center gap-2'>
              {liveSites.map((project) => (
                <ProjectCard project={project} key={project.title} />
              ))}
            </div>
          </section>
          <section className='site-container'>
            <h2>Contributor Of</h2>
            <div className='flex flex-wrap place-content-center place-items-center gap-2'>
              {assisted.map((project) => (
                <ProjectCard project={project} key={project.title} />
              ))}
            </div>
          </section>
          <section className='site-container'>
            <h2>Misc Projects</h2>
            <div className='flex flex-wrap place-content-center place-items-center gap-2'>
              {miscProjects.map((project) => (
                <ProjectCard project={project} key={project.title} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className='flex max-h-min w-full place-content-center place-items-center border-t-[1px] border-black/10 bg-background/25 p-4 font-sans text-sm dark:border-white/10'>
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
