'use client';
import { Progress } from '@nextui-org/react';

export default function Loading() {
  return (
    <Progress
      size='sm'
      isIndeterminate
      aria-label='Loading...'
      className='min-w-full'
    />
  );
}
