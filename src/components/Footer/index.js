import React from "react";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>
        Copyright <FaCopyright /> <Link to="/">DreamHotels</Link>
      </h3>
    </div>
  );
};

export default Footer;
