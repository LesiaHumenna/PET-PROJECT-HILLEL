import { NavLink } from 'react-router-dom';
import Logo from '../images/hero-bg.jpg'
import Slider from './Slider';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const user = <FontAwesomeIcon icon={faUser} />
const cart = <FontAwesomeIcon icon={faCartShopping} />
const search = <FontAwesomeIcon icon={faMagnifyingGlass} />
function Header(){
  const location = useLocation();
  console.log(location.pathname);
  let background = false;
  let heightHerou = {
    minHeight: '100vh',
  };
if(location.pathname === "/"){
  background = true;
}else if(location.pathname === "/menu" || location.pathname === "/shop"){
   heightHerou = {
    minHeight: 'auto'
  };
}

const colorBackground = {
  backgroundColor: 'black',
};
return(
<>
<div className="hero_area" style={heightHerou}>
{background && <div className="bg-box">
      <img src={Logo} alt="" />
    </div>}
 <header className="header_section" style={colorBackground}>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <NavLink className="navbar-brand" to="/">
            <span>
              Feane
            </span>
          </NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">Menu</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="book.html">Book Table</a>
              </li>
            </ul>
            <div className="user_option">
              <a href="" className="user_link">
                {user}
              </a>
              <NavLink to="/shop" className="user_link">
                {cart}
              </NavLink>
              
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
              
                {search}
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <a href="" className="order_online">
                Order Online
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>

    {background && <Slider />  }
   </div>
   
</>)
}

export default Header;