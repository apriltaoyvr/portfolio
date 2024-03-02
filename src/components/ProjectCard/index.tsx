'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
} from '@nextui-org/react';
import NextImage from 'next/image';
import type { IProject } from '@/types';
import icons from '@/data/icons.json';

export default function ProjectCard({ project }: { project: IProject }) {
  const { href, src, title, subtitle, frameworks } = project;
  const matchIcon = (id: string) => icons.find((icon) => icon.id === id);

  return (
    <Card as={Link} href={href} shadow='md' isHoverable isPressable>
      <CardHeader className='flex min-w-full flex-col place-content-center p-0'>
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
      </CardHeader>
      <CardBody className='text-center'>
        <span className='font-grotesque text-xl font-bold'>{title}</span>
        <p className='font-grotesque font-semibold'>{subtitle}</p>
      </CardBody>
      <Divider />
      <CardFooter className='flex min-w-full flex-col place-content-center'>
        <footer className='flex flex-row place-items-center gap-2'>
          {frameworks.map((framework) => {
            const icon = matchIcon(framework);
            return (
              <Image
                key={framework}
                src={`/icons/${icon?.id}.svg` ?? '/favicon.ico'}
                alt={icon?.name ?? 'Unknown'}
                height={25}
                width={25}
              />
            );
          })}
        </footer>
      </CardFooter>
    </Card>
  );
}
