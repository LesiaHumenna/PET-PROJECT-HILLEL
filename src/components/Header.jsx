import { NavLink } from "react-router-dom";
import Logo from "../images/hero-bg.jpg";
import Slider from "./Slider";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import UserLogIn from './UserLogIn';
import { useDispatch, useSelector } from 'react-redux'
import {productsActions} from '../store/index'
const userIcon = <FontAwesomeIcon icon={faUser} />;
const cart = <FontAwesomeIcon icon={faCartShopping} />;
const search = <FontAwesomeIcon icon={faMagnifyingGlass} />;

// eslint-disable-next-line react/prop-types
function Header() {
const navigate = useNavigate();
const user = useSelector(state => state.user);
const arrayProducts = useSelector(state => state.products.items);

const dispatch = useDispatch();

  const location = useLocation();
 
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
    const isActive = exact ? location.pathname === path : location.pathname.startsWith(path);
    return { color: isActive ? '#ffbe33' : 'white' };
  };

  const colorBackground = {
    backgroundColor: "black",
  };

  const [searchText, setSearchText] = useState("");
  const [searchProd, setSearchProd] = useState(false);
  const [filtredProd, setFilterProd] = useState([]);
  const searchClick = (e) => {
    e.preventDefault();
    setSearchProd(!searchProd);
  };
  const handleChange = (e) => {
    setSearchText(e.target.value.trim());
    console.log(searchText);
    if(arrayProducts){
    const filtered = arrayProducts.filter((product) =>
    product.name.toLowerCase().includes(searchText)
      );
    console.log(filtered)
      setFilterProd(filtered);
  }
  };

  function searchNow(e){
    e.preventDefault();
    if(filtredProd.length > 0){
      console.log(filtredProd)
      const products = filtredProd;
      dispatch(productsActions.filtedProd(filtredProd));
  navigate(`/search/?${searchText}`);
    }
  }


  return (
    <>
      <div className="hero_area" style={heightHerou}>
        {background && (
          <div className="bg-box">
            <img src={Logo} alt="" />
          </div>
        )}
        <header className="header_section" style={colorBackground}>
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <NavLink className="navbar-brand" to="/">
                <span>Feane</span>
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
              <ul className="navbar-nav  mx-auto ">
                  <li className="nav-item">
                    <NavLink
                     className="nav-link"
                     style={computeLinkStyle("/", true)}
                      to="/" exact>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" style={computeLinkStyle("/menu")} to="/menu">
                      Menu
                    </NavLink>                  
                  </li>
                  <li className="nav-item">
            <a
              className="nav-link"
              style={computeLinkStyle("/about")}
              href="/about"
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={computeLinkStyle("/booktable")}
              to="/booktable"
            >
              Book Table
            </NavLink>
          </li>
        </ul>
                <div className="user_option">
                   {!user.isLoggedIn && <NavLink to="/login" className="user_link">
                    {userIcon}
                  </NavLink>}
                  {user.isLoggedIn && <UserLogIn user={user} />}
                  <NavLink to="/shop" className="user_link">
                    {cart}
                  </NavLink>

                  <form className="form-inline">
                    <button
                      onClick={searchClick}
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
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
            {searchProd && (
              <nav
                className="navbar nav_search navbar-light bg-light"
                style={{ width: "30%", float: "right" }}
              >
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleChange}
                    value={searchText}
                  />
                  <button onClick={(e)=> {searchNow(e)}}
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </nav>
            )}
          </div>
        </header>

        {background && <Slider />}
      </div>
    </>
  );
}

export default Header;
