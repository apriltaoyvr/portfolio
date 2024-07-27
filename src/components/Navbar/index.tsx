import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Navbar() {
  return (
    <nav className='border-b p-4 sticky top-0'>
      <ul className='flex place-items-center flex-row justify-between'>
        <li>
          <Link href='/' className='link'>Home</Link>
        </li>
        <li>
          <Link href='https://github.com/apriltaoyvr' className='p-1 link'>
            Github
          </Link>
        </li>
      </ul>
    </nav>
  )
}