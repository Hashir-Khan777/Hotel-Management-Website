import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../../store/action/AuthActions";
import "./index.css";

const Nav = ({ background, relative }) => {
  const [navbar, setNavbar] = useState(false);

  const { user } = useSelector((state) => state.AuthReducer);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(Logout());
  };

  return (
    <nav
      className={`navbar ${relative ? "navbar_relative" : "navbar_fixed"} ${
        navbar || background ? "bgColor" : null
      }`}
    >
      <div className="container_fluid">
        <div className="logo">
          <Link to="/">DreamHotels</Link>
        </div>

        <div className="navbar_list">
          <ul className="nav_list">
            <li className="nav_link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav_link">
              <Link to="/">About</Link>
            </li>
            <li className="nav_link">
              <Link to="/">Services</Link>
            </li>
            <li className="nav_link">
              <Link to="/">Contact</Link>
            </li>
            {!user ? (
              <li className="nav_link">
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <li className="nav_link">
                <button className="nav_button" onClick={logout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
