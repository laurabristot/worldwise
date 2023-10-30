import { Link } from 'react-router-dom'
import { AppNav, PageNav } from '../../components'

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  )
}
