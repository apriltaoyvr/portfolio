import ProjectCard from '@/components/ProjectCard';
import paidWork from '@/data/professional.json';
import contributedWork from '@/data/contributions.json';
import personalWork from '@/data/personal.json';

export default function Experience() {
  return (
    <>
      <section role='group' className='h-full w-full'>
        <h2 className='text-center md:text-start'>Professional Experience</h2>
        <ul className='responsive-flexbox-orientation flex flex-row flex-wrap gap-2 md:place-content-start'>
          {paidWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </section>
      <section role='group' className='h-full w-full'>
        <hgroup>
          <h2>Personal Projects</h2>
        </hgroup>
        <section className='responsive-flexbox-orientation flex flex-row flex-wrap gap-2 md:place-content-start'>
          {personalWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </section>
      <section role='group'>
        <hgroup>
          <h2>Contributed to</h2>
        </hgroup>
        <section>
          <ul className='responsive-flexbox-orientation flex flex-row flex-wrap gap-2 md:place-content-start'>
            {contributedWork.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
