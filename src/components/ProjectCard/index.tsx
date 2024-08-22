import Link from 'next/link';
import Image from 'next/image';

type Props = {
  src: string;
  href: string;
  title: string;
  position?: string;
  desc: string;
  skills: string[];
};

export default function ProjectCard({
  src,
  href,
  title,
  position,
  desc,
  skills,
}: Props) {
  return (
    <>
      <li className='flex min-h-full w-[450px] max-w-md list-none flex-col border border-neutral-500 dark:border-neutral-600'>
        <figure className='relative h-[240px] w-full max-w-md border-b border-neutral-500 dark:border-neutral-600'>
          <Image
            src={src}
            alt={'Thumbnail of ' + title}
            fill
            sizes='(min-width: 808px) 50vw, 100vw'
            className='z-0 object-cover'
            draggable={false}
          />
        </figure>
        <main className='flex flex-col place-content-start p-4'>
          <hgroup>
            <h3 className='text-center [&>a]:underline hover:[&>a]:decoration-dashed'>
              <Link href={href}>{title}</Link>
            </h3>
            {position && <h4 className='text-center text-neutral-700 dark:text-neutral-300'>{position}</h4>}
          </hgroup>
          <p className='text-center text-neutral-600 dark:text-neutral-400'>{desc}</p>
        </main>
        <footer>
          <ul className='flex flex-row flex-wrap gap-1 p-2 pb-3'>
            {skills.map((skill) => (
              <li key={skill} className='border border-neutral-600 dark:border-neutral-400 text-neutral-600 dark:text-neutral-400 px-2'>
                {skill}
              </li>
            ))}
          </ul>
        </footer>
      </li>
    </>
  );
}
