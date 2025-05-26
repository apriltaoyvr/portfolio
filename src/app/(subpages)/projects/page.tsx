import ProjectCard from '@/components/ProjectCard';
import paidWork from '@/data/professional.json';
import contributedWork from '@/data/contributions.json';
import personalWork from '@/data/personal.json';

export default function Experience() {
  return (
    <>
      <section role='group' className='h-full w-full'>
        <h2 className='text-center md:text-start'>Professional Experience</h2>
        <ul className='flex flex-row flex-wrap place-content-center place-items-center gap-2 md:place-content-start md:place-items-start'>
          {paidWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </section>
      <section role='group' className='h-full w-full'>
        <hgroup>
          <h2>Personal Projects</h2>
        </hgroup>
        <section className='flex flex-row flex-wrap place-content-center place-items-center gap-2 md:place-content-start md:place-items-start'>
          {personalWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </section>
      <section role='group' className='h-full w-full'>
        <hgroup>
          <h2>Contributed to</h2>
        </hgroup>
        <section role='group' className='h-full w-full'>
          <ul className='flex flex-row flex-wrap place-content-center place-items-center gap-2 md:place-content-start md:place-items-start'>
            {contributedWork.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
