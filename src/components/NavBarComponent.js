import { Link } from 'react-router-dom'

export default function NavBarComponent() {
  return (
    <>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </>
  )
}