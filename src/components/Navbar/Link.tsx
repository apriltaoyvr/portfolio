import Link from 'next/link';

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className='link mx-1 lowercase'>
        {children}
      </Link>
    </li>
  );
}
