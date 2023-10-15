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
import {useSelector} from "react-redux";
import UserLogOut from './UserLogOut';
//import { useDispatch } from 'react-redux'

const userIcon = <FontAwesomeIcon icon={faUser} />;
const cart = <FontAwesomeIcon icon={faCartShopping} />;
const search = <FontAwesomeIcon icon={faMagnifyingGlass} />;

// eslint-disable-next-line react/prop-types
function Header({productsType }) {
const navigate = useNavigate();
const user = useSelector(state => state.user);
//const dispatch = useDispatch();

  const location = useLocation();
  console.log(location.pathname);
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

  const colorBackground = {
    backgroundColor: "black",
  };

  const [searchText, setSearchText] = useState("");
  const [searchProd, setSearchProd] = useState(false);
  const searchClick = (e) => {
    e.preventDefault();

    setSearchProd(!searchProd);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if(productsType){
    // eslint-disable-next-line react/prop-types
    const filtered = productsType.filter((product) =>
      // eslint-disable-next-line react/prop-types
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if(filtered.length === 1){
      const products = filtered[0];
      navigate(`/menu/${products.id}`);
    }else{
      productsType(filtered);
    }
    
  }
  };
  console.log(productsType)

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
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/menu">
                      Menu
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to= "/booktable">
                      Book Table
                    </NavLink>
                  </li>
                </ul>
                <div className="user_option">
                   {!user.isLoggedIn && <NavLink to="/login" className="user_link">
                    {userIcon}
                  </NavLink>}
                  {user.isLoggedIn && <UserLogOut user={user} />}
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
                  <button onClick={`{selectProduct.id}`}
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
