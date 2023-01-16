'use client';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  return (
    <main className='center flex-col p-5'>
      <h1 className='underline-thick'>Hello World</h1>
      <h2 className='text-sky-600 '>Testing</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        dolorum neque. Adipisci vel aliquam alias reiciendis rerum aperiam
        perspiciatis, laborum facilis sit quas quia fugit illo hic placeat nisi
        sapiente?
      </p>
      <ThemeSwitch />
    </main>
  );
}
