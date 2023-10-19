
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/hero-bg.jpg';
import Slider from './Slider';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux'; 
import { Badge, Navbar, Nav } from 'react-bootstrap';
import UserLogOut from './UserLogOut';
import { productsActions } from '../store/index'; 

const userIcon = <FontAwesomeIcon icon={faUser} />;
const cartIcon = <FontAwesomeIcon icon={faCartShopping} />;
const search = <FontAwesomeIcon icon={faMagnifyingGlass} />;

function Header() {
  const dispatch = useDispatch(); 
  const user = useSelector((state) => state.user);
  const arrayProducts = useSelector((state) => state.products.items);
  const cartQuant = useSelector((state) => state.cart.totalQuantity);
  const location = useLocation();
  const [searchText, setSearchText] = useState('');
  const [searchProd, setSearchProd] = useState(false);
  const [filtredProd, setFilterProd] = useState([]);

    let background = false;
    let heightHerou = {
      minHeight: "100vh",
    };
    if (location.pathname === "/") {
      background = true;
    } else if (location.pathname !== "/") {
      heightHerou = {
        minHeight: "auto",
      };
    }

  const computeLinkStyle = (path, exact = false) => {
    const isActive = exact
      ? location.pathname === path
      : location.pathname.startsWith(path);
    return { color: isActive ? '#ffbe33' : 'white' };
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (arrayProducts) {
      const filtered = arrayProducts.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.trim())
      );
      console.log(filtered);
      setFilterProd(filtered);
    }
  };
  

  function searchNow(e) {
        e.preventDefault();
        if (filtredProd.length > 0) {
          console.log(filtredProd);
          const products = filtredProd;
          dispatch(productsActions.filtedProd(filtredProd));
          //navigate(`/search/?${searchText}`);
        }
      }
      return (
        <>
        <div className="hero_area" style={heightHerou}>
          {location.pathname === '/' && (
            <div className="bg-box">
              <img src={Logo} alt="" />
            </div>
          )}
          <Navbar expand="lg" className="header_section" bg="dark" variant="dark" >
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <span>Feane</span>
              </NavLink>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-nav mx-auto">
                  <NavLink className="nav-link" style={computeLinkStyle('/', true)} to="/" exact>
                    Home
                  </NavLink>
                  <NavLink className="nav-link" style={computeLinkStyle('/menu')} to="/menu">
                    Menu
                  </NavLink>
                  <NavLink className="nav-link" style={computeLinkStyle('/about')} to="/about">
                    About
                  </NavLink>
                  <NavLink className="nav-link" style={computeLinkStyle('/booktable')} to="/booktable">
                    Book Table
                  </NavLink>
                </Nav>
                <div className="user_option">
                  {!user.isLoggedIn && (
                    <NavLink to="/login" className="user_link">
                      {userIcon}
                    </NavLink>
                  )}
                  {user.isLoggedIn && <UserLogOut user={user} />}
                  <NavLink to="/shop" className="user_link">
                    {cartIcon}
                    {cartQuant > 0 && <Badge bg="secondary">{cartQuant}</Badge>}
                  </NavLink>
                  <form className="form-inline">
                    <button
                      onClick={() => setSearchProd(!searchProd)}
                      className="btn my-2 my-sm-0 nav_search-btn"
                      type="button"
                    >
                      {search}
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                  <a href="" className="order_online">
                    Order Online
                  </a>
                </div>
              </Navbar.Collapse>
            </div>
          </Navbar>
          {searchProd && (
            <Navbar
              bg="light"
              className="nav_search"
              style={{ width: '30%', float: 'right' }}
            >
              <div className="container">
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleChange}
                    value={searchText}
                  />
                  <button
                    onClick={searchNow}
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="button"
                  >
                    Search
                  </button>
                </form>
              </div>
            </Navbar>
          )}
          {background && <Slider />}
        </div>
        </>
      );
    }
    
    export default Header;