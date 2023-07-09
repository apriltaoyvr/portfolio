import ProjectCard from '@/components/ProjectCard';
import ripperWiki from '@/images/theripper93-wiki/preview.png'

export default function Home() {
  return (
    <main>
      <section className='p-4 flex flex-wrap place-content-center place-items-center gap-2'>
        <ProjectCard
          src='https://user-images.githubusercontent.com/95392008/201547099-a89f4b0e-692f-4b29-990e-ecf081b9bba8.png'
          title='AmbrosiaLab'
          href='/ambrosialab'
        />
        <ProjectCard
          src='https://user-images.githubusercontent.com/95392008/213563095-f281b60d-df77-4b6f-aa05-edc7ec5d36d4.png'
          title='Alice i18n'
          href='/ambrosialab'
        />
        <ProjectCard
          src='https://user-images.githubusercontent.com/1346839/205125380-9fbe6625-64a2-4d21-b114-5c509bbac716.png'
          title='TheRipper93'
          href='/ambrosialab'
        />
        <ProjectCard
          src={ripperWiki}
          title='TheRipper93 Wiki'
          href='https://wiki.theripper93.com/'
        />
      </section>
    </main>
  );
}
