'use client';
import { Progress } from '@nextui-org/react';

export default function Loading() {
  return (
    <Progress
      aria-label='Loading...'
      size='sm'
      color='secondary'
      className='min-w-full'
      isIndeterminate
    />
  );
}
