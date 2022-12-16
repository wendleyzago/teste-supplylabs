import { Link } from 'react-router-dom';

import logo from "../img/logo-supplylabs.png"

const Navbar = () => {
  return (
    <nav>
        <h2>
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </h2>
    </nav>
  )
}

export default Navbar