import ProjectCard from '@/components/ProjectCard';
import paidWork from '@/data/professional.json';
import contributedWork from '@/data/contributions.json';
import personalWork from '@/data/personal.json';

export default function Experience() {
  return (
    <article className='max-h-[90vh]'>
      <div className='place-self-start'>
        <h2>Professional Experience</h2>
        <ul className='flex flex-row gap-2'>
          {paidWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
      <div className='place-self-start'>
        <h2>Personal Projects</h2>
        <ul className='flex flex-row gap-2'>
          {personalWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
      <div className='place-self-start'>
        <h2>Contributed to</h2>
        <ul className='flex flex-row gap-2'>
          {contributedWork.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
    </article>
  );
}
