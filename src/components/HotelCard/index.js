import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  return (
    <Link
      to={`/details/${hotel.name.replace(
        / /g,
        "-"
      )}/${hotel.description.replace(/ /g, "-")}/${hotel._id}`}
    >
      <div className="card">
        <img className="card_image" src={hotel.image} alt="card" />
        <div className="card_content">
          <h2 className="card_title">{hotel.name}</h2>
          <p className="card_text">{hotel.description}</p>
          <Link to="/" className="card_button">
            Book
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
