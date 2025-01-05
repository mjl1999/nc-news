import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
        <ul>
            {/* <li><Link to="#"><i className="fa-solid fa-house"></i></Link></li> */}
            <li><Link to="/news"><i className="fa-regular fa-newspaper"></i></Link></li>
            {/* <li><Link to="#"><i className="fa-regular fa-user"></i></Link></li>
            <li><Link to="#"><i className="fa-solid fa-bookmark"></i></Link></li>
            <li><Link to="#"><i className="fa-solid fa-users"></i></Link></li> */}
        </ul>
      
    </nav>
  )
}

export default NavBar
