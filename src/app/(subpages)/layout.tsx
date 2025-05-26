export default function InnerBoxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-row flex-wrap place-content-start place-items-start gap-8 px-8 py-4 md:place-content-center md:place-items-center'>
      {children}
    </div>
  );
}
