// import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className="flex bg-secondary p-2
    justify-evenly items-center shadow-md text-neutral 
    "
    >
      <div>
        <a href="" className="font-bold ">
          <span>MERN-AUTH</span>
        </a>
      </div>
      <div
        className="flex center gap-8 
        font-semibold"
      >
        <a href=" " className="flex items-center gap-2">
          <FaSignInAlt />
          <span>Sign In</span>
        </a>
        <a href="" className="flex items-center gap-2">
          <FaSignOutAlt />
          <span>Sign Out</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
