import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex min-h-[85vh] flex-col flex-wrap place-content-center place-items-center p-2'>
      <h1>404: Not Found</h1>
      <span>Could not find requested resource</span>
    </div>
  )
}