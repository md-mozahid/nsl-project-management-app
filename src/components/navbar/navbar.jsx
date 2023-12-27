import { FaCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
        <nav className="md:flex items-center justify-between border-b pb-2 md:pb-3 px-5">
          <Link to="add-form">
            <button className="btn btn-primary btn-fw">
              <span className="text-xl">+</span> Add Project
            </button>
          </Link>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-5 uppercase">
              <li className="md:text-xl hover:text-rose-500">
                <Link to="/">Home</Link>
              </li>
              <li className="md:text-xl hover:text-rose-500">
                <Link to="crane-update">Crane Schedule</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center space-x-5 ">
            <h2 className="text-3xl md:text-4xl cursor-pointer uppercase hidden md:block">
              <FaCircleUser />
            </h2>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
