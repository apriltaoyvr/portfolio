import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Badge } from '@/components/ui/badge';

type Props = {
  src: string | null;
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
      <li className='flex min-h-[inherit] w-[450px] max-w-md grow list-none flex-col border'>
        <figure
          className={clsx('relative h-[240px] w-full max-w-md border-b', {
            'mesh-gradient': !src,
          })}
        >
          {src && (
            <Image
              src={src}
              alt={`Thumbnail of ${title}`}
              fill
              sizes='(min-width: 808px) 50vw, 100vw'
              className='z-0 object-cover'
              draggable={false}
            />
          )}
        </figure>
        <main className='flex flex-col place-content-start p-4'>
          <hgroup className='mb-2'>
            <h3 className='link mb-0 text-center'>
              <Link
                href={href}
                className='flex flex-row place-content-center place-items-center gap-1 transition-colors hover:text-muted-foreground'
              >
                {title}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </Link>
            </h3>
            {position && (
              <h4 className='text-muted text-center font-sans'>{position}</h4>
            )}
          </hgroup>
          <p className='text-muted text-center text-sm'>{desc}</p>
        </main>
        <footer>
          <ul className='flex flex-row flex-wrap place-content-center gap-1 p-2 pb-3'>
            {skills.map((skill) => (
              <Badge variant='outline' key={skill}>
                {skill}
              </Badge>
            ))}
          </ul>
        </footer>
      </li>
    </>
  );
}
