export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-[85vh] flex-row flex-wrap place-content-center place-items-center gap-8 p-2 md:place-content-start md:place-items-start'>
      {children}
    </main>
  );
}
