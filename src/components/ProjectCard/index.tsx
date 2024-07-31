import Link from 'next/link';
import Image from 'next/image';

type Props = {
  src: string;
  href: string;
  title: string;
  subtitle: string;
  frameworks: string[];
};

export default function ProjectCard({
  src,
  href,
  title,
  subtitle,
  frameworks,
}: Props) {
  return (
    <>
      <li className='grid border-coloured grid-rows-[240px_1fr] w-[450px] max-w-md list-none border'>
        <figure className='relative h-[240px] w-full max-w-md border-b'>
          <Image
            src={src}
            alt={'Thumbnail of ' + title}
            fill
            sizes='(min-width: 808px) 50vw, 100vw'
            className='z-0 object-cover'
          />
        </figure>
        <main className='p-4 text-center flex flex-col place-content-start'>
          <Link
            href={href}
            className='hover:[&>h3]:font-extrabold hover:[&>h3]:transition-all'
          >
            <h3>{title}</h3>
          </Link>

          <p>{subtitle}</p>
        </main>
        {/* <footer className='w-full border-t border-dashed flex flex-row flex-wrap place-content-center p-2'>
          <ul className='flex flex-wrap place-content-center place-items-center gap-2'>
            {frameworks.map((framework) => (
              <li>
                {framework}
              </li>
            ))}
          </ul>
        </footer> */}
      </li>
    </>
  );
}
