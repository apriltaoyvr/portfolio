export default function ProjectCard({title, description}: {title: string, description: string}) {
  return(
    <li className='border border-coloured'>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}