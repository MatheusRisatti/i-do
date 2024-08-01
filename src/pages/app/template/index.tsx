import { useParams } from 'react-router-dom'

export function TemplatePage() {
  const { slug } = useParams()

  return <h1>{slug}</h1>
}
