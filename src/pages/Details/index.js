import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetHotelById } from "../../store/action/HotelActions";
import { FaSpinner } from "react-icons/fa";
import { Footer, Nav } from "../../components";
import "./index.css";

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, HotelDetail, error } = useSelector(
    (state) => state.HotelReducer
  );

  useEffect(() => {
    dispatch(GetHotelById(id));
  }, [dispatch, id]);

  return (
    <div className="hotel_details">
      <Nav background />
      {loading ? (
        <div className="loading">
          <FaSpinner className="spinner" />
        </div>
      ) : error ? (
        <div className="loading">
          <p className="error">{error}</p>
        </div>
      ) : (
        <div className="details">
          <h2>Details {id}</h2>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Details;
