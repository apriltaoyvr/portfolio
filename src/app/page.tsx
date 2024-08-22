import ProjectCard from '@/components/ProjectCard';
import professionalProjects from '@/data/professional.json';
import otherProjects from '@/data/other.json';

export default function Home() {
  return (
    <main className='site-container flex flex-col place-content-center place-items-center gap-8'>
      <header className='border-coloured grid grid-cols-3 border' role='banner'>
        <article className='col-span-2 m-4 flex flex-col gap-2 [&>p]:max-w-prose'>
          <h1 className='text-start'>Hello!</h1>
          <p>
            I'm a <strong>full-stack web developer</strong> with{' '}
            <strong>2 years</strong> of experience in:
          </p>
          <ul className='ml-6 list-disc [&>li]:mt-1'>
            <li>React (Next.js)</li>
            <li>Typescript</li>
            <li>PostgreSQL</li>
            <li>UI/UX</li>
          </ul>
          <p>
            Aside from web development, I have a love for pigeons, cats, and
            rats 🕊️
          </p>
        </article>
        <figure className='bg-dark dark:bg-light' />
      </header>
      {/* <hr
        className='border-b-1 border-coloured mb-6 mt-8 w-full border-dashed'
        aria-hidden='true'
      /> */}
      <main
        role='main'
        className='flex flex-col place-content-center place-items-center gap-8'
      >
        <section role='group' className=''>
          <h2>Experience</h2>
          <ul className='flex flex-row flex-wrap place-content-center gap-2'>
            {professionalProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ul>
        </section>
        <section role='group' className='h-full w-full'>
          <h2>Personal Projects</h2>
          <ul className='flex flex-row flex-wrap place-content-center gap-2'>
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ul>
        </section>
      </main>
    </main>
  );
}
