import { Link, Outlet } from "react-router-dom";

function Layout(){

    return(
        <>
      <nav className='nav-container'>
        <ul className="nav-list" >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    )
}

export {Layout};