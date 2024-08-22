import ProjectCard from '@/components/ProjectCard';
import professionalProjects from '@/data/professional.json';
import otherProjects from '@/data/other.json';

export default function Experience() {
  return (
    <main className='responsive-flexbox-orientation flex flex-col gap-8 md:place-content-start'>
      <section role='group'>
        <h2 className='text-center md:text-start'>Experience</h2>
        <ul className='responsive-flexbox-orientation flex flex-row flex-wrap gap-2 md:place-content-start'>
          {professionalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </section>
      <section role='group' className='h-full w-full'>
        <h2>Personal Projects</h2>
        <ul className='responsive-flexbox-orientation flex flex-row flex-wrap gap-2 md:place-content-start'>
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </section>
    </main>
  );
}