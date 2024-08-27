import { ImageResponse } from 'next/og';
import { Chivo_Mono, Space_Grotesk } from 'next/font/google';

const mono = Chivo_Mono({
  subsets: ['latin'],
});

export async function GET() {
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgb(245 245 245)',
          backgroundColor: 'rgb(10 10 10)',
          fontFamily:
            '"Chivo Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      >
        <section tw='flex flex-col place-content-center place-items-center font-mono'>
          <hgroup tw='flex flex-col place-content-start place-items-start gap-2'>
            <h1 tw='mb-0 text-8xl'>Hello! </h1>
            <h2 tw='mb-8 font-normal text-4xl'>
              I'm a
              <strong tw='font-bold text-[#d14081] mx-2'>
                {' '}
                full-stack web developer{' '}
              </strong>
              and
              <strong tw='font-bold text-[#d14081] ml-2'>web designer</strong>.
            </h2>
          </hgroup>
        </section>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
