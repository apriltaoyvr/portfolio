'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react';
import NextImage from 'next/image';

export default function ProjectCard({
  src,
  href,
  title,
}: {
  src: string;
  href: string;
  title: string;
}) {
  return (
    <Card shadow='sm' isPressable onPress={() => console.log('item pressed')}>
      <CardBody className='overflow-visible p-0'>
        <Image
          as={NextImage}
          src={src}
          alt={`A photo of ${title}`}
          className='w-full object-cover aspect-video h-[240px]'
          shadow='sm'
          radius='lg'
          width={1920}
          height={1080}
        />
      </CardBody>
      <CardFooter className='text-large min-w-full place-content-center'>
        <span className='text-center font-semibold'>{title}</span>
      </CardFooter>
    </Card>
  );
}
