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
          className='w-full object-cover aspect-video h-[240px]'
          shadow='sm'
          radius='lg'
          isBlurred
          width={1920}
          height={1080}
        />
      </CardBody>
      <CardFooter className='flex flex-col min-w-full place-content-center'>
        <span className='text-2xl text-center font-bold font-grotesque'>
          {title}
        </span>
        <p className='text-lg font-grotesque font-semibold mb-2'>{subtitle}</p>
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
