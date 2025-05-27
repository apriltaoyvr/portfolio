import ProjectCard from '@/components/ProjectCard';
import paidWork from '@/data/professional.json';
import contributedWork from '@/data/contributions.json';
import personalWork from '@/data/personal.json';

export default function Experience() {
  return (
    <article className='grid grid-cols-1 md:auto-rows-auto'>
      <div className='md:place-self-start'>
        <h2 className='mt-0'>Professional Experience</h2>
        <ul className='flex flex-row flex-wrap place-content-center gap-2 md:place-content-start'>
          {paidWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
      <div className='md:place-self-start'>
        <h2>Personal Projects</h2>
        <ul className='flex flex-row flex-wrap place-content-center gap-2 md:place-content-start'>
          {personalWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
      <div className='md:place-self-start'>
        <h2>Contributed to</h2>
        <ul className='flex flex-row flex-wrap place-content-center gap-2 md:place-content-start'>
          {contributedWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
    </article>
  );
}
