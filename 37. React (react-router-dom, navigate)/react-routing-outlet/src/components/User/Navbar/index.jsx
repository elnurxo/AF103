import { Link } from "react-router-dom"

const UserNavbar = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  )
}

export default UserNavbar