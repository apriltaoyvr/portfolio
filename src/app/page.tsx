'use client';
import { Image } from '@nextui-org/react';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <main className='mt-8 flex flex-col place-content-center justify-around gap-4'>
      <header className='min-w-full text-center'>
        <h1>Portfolio</h1>
      </header>
      <section className='p-4 flex flex-col mb-2'>
        <h2>Projects</h2>
        <div className='flex flex-wrap place-content-center place-items-center gap-2'>
          <ProjectCard
            src='https://user-images.githubusercontent.com/95392008/201547099-a89f4b0e-692f-4b29-990e-ecf081b9bba8.png'
            href='https://www.ambrosialab.it/en'
            title='AmbrosiaLab'
            subtitle='A website for Italian research company AmbrosiaLab'
            frameworks={[
              { src: '/icons/react.svg', name: 'React' },
              { src: '/icons/styledcomponents.svg', name: 'Styled Components' },
            ]}
          />
          <ProjectCard
            src='https://user-images.githubusercontent.com/95392008/252136157-ce6380fb-5161-4767-866c-f7fcbb8b08f0.png'
            href='https://alice-i18n.vercel.app/'
            title='Alice i18n'
            subtitle='An online i18n version of Alice in Wonderland'
            frameworks={[
              { src: '/icons/astro.svg', name: 'Astro' },
              { src: '/icons/tailwindcss.svg', name: 'TailwindCSS' },
            ]}
          />
          <ProjectCard
            src='https://user-images.githubusercontent.com/1346839/205125380-9fbe6625-64a2-4d21-b114-5c509bbac716.png'
            href='https://theripper93.com/'
            title='TheRipper93'
            subtitle='A website for developer TheRipper93'
            frameworks={[
              { src: '/icons/react.svg', name: 'React' },
              { src: '/icons/mui.svg', name: 'MUI' },
            ]}
          />
          <ProjectCard
            src='https://raw.githubusercontent.com/apriltaoyvr/apriltao.art/main/src/images/theripper93-wiki/preview.png'
            href='https://wiki.theripper93.com/'
            title='TheRipper93 Wiki'
            subtitle='A wiki for developer TheRipper93'
            frameworks={[{ src: '/icons/react.svg', name: 'React' }]}
          />
        </div>
      </section>
      <section className='flex flex-col place-content-center place-items-center gap-2 mb-2'>
        <h2>About Me</h2>
        <div className='grid grid-cols-2 gap-4'>
          <figure className='flex flex-col place-content-center place-items-center'>
            <Image
              width={300}
              alt='A photo of myself'
              src='https://res.cloudinary.com/dsbhmynmq/image/upload/v1668374078/April%20Tao/Images/me_fzw1n4.webp'
              isBlurred
              shadow='sm'
              radius='lg'
              className='border-[1px] dark:border-neutral-100/10'
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
                <h4>Frameworks</h4>
                <ul>
                  <li>ReactJS (NextJS)</li>
                  <li>Astro</li>
                </ul>
              </section>
              <section>
                <h4>Javascript</h4>
                <ul>
                  <li>Typescript</li>
                  <li>jQuery</li>
                </ul>
              </section>
              <section>
                <h4>Styling</h4>
                <ul>
                  <li>MUI</li>
                  <li>TailwindCSS</li>
                  <li>Styled Components</li>
                  <li>GraphQL</li>
                </ul>
              </section>
            </section>
          </article>
        </div>
      </section>
      <section></section>
      <footer className='text-sm font-sans w-full border-t-[1px] border-black/10 dark:border-white/10 p-4 flex place-content-center place-items-center max-h-min'>
        <p>Brand icons by Simple Icons</p>
      </footer>
    </main>
  );
}
