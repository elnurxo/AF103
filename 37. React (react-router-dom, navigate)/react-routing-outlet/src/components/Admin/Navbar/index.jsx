import { Link } from "react-router-dom"

const AdminNavbar = () => {
  return (
    <ul>
      <li>
        <Link to='/admin'>Dashboard</Link>
        <Link to='/admin/products'>Products</Link>
      </li>
    </ul>
  )
}

export default AdminNavbar