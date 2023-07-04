import { NavLink } from "react-router-dom";
import "./style.scss";

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className="page-container navbar-inner">
        <div className='nav-logo'>
          <NavLink to='/'>
            <img data-cy="marvel-logo" alt='Marvel' src="https://www.freepnglogos.com/uploads/marvel-logo-png/marvel-studios-marvel-database-fandom-powered-wikia-10.png" />
          </NavLink>
        </div>
        <NavLink to='/cart' data-cy="cart-btn">
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
