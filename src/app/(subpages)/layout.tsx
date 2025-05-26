export default function InnerBoxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-row flex-wrap place-content-start place-items-start md:place-content-center md:place-items-center gap-8 px-8 py-4'>
      {children}
    </div>
  );
}
