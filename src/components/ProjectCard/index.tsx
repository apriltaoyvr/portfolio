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
      <li className='border-coloured grid w-[450px] max-w-md list-none grid-rows-[240px_1fr] border'>
        <figure className='relative h-[240px] w-full max-w-md border-b'>
          <Image
            src={src}
            alt={'Thumbnail of ' + title}
            fill
            sizes='(min-width: 808px) 50vw, 100vw'
            className='z-0 object-cover'
          />
        </figure>
        <main className='flex flex-col place-content-start p-4 text-center'>
          <Link
            href={href}
            className='hover:[&>h3]:font-extrabold'
          >
            <h3>{title}</h3>
            {position && <h4>{position}</h4> }
          </Link>
          <p>{desc}</p>
        </main>
      </li>
    </>
  );
}
