'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link,
} from '@nextui-org/react';
import NextImage from 'next/image';

export default function ProjectCard({
  src,
  href,
  title,
  subtitle,
  frameworks,
}: {
  src: string;
  href: string;
  title: string;
  subtitle: string;
  frameworks: { src: string; name: string }[];
}) {
  return (
    <Card as={Link} href={href} shadow='sm' isPressable>
      <CardBody className='overflow-visible p-0'>
        <Image
          as={NextImage}
          src={src}
          alt={`A photo of ${title}`}
          className='aspect-video h-[240px] w-full object-cover'
          shadow='sm'
          radius='lg'
          isBlurred
          width={1920}
          height={1080}
        />
      </CardBody>
      <CardFooter className='flex min-w-full flex-col place-content-center'>
        <span className='text-center font-grotesque text-2xl font-bold'>
          {title}
        </span>
        <p className='mb-2 font-grotesque text-lg font-semibold'>{subtitle}</p>
        <footer className='flex flex-row gap-2'>
          {frameworks.map((framework) => (
            <Image
              key={framework.name}
              src={framework.src}
              alt={framework.name}
              height={25}
              width={25}
              isBlurred
            />
          ))}
        </footer>
      </CardFooter>
    </Card>
  );
}
