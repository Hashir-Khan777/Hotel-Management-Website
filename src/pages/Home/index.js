import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, HotelCard, Nav, Slider } from "../../components";
import { GetHotels } from "../../store/action/HotelActions";
import "./index.css";
import { FaSpinner } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, Hotels, error } = useSelector((state) => state.HotelReducer);

  useEffect(() => {
    dispatch(GetHotels());
  }, [dispatch]);

  return (
    <div className="hotel_management_wedsite">
      <Nav background={loading || error} />
      {loading ? (
        <div className="loading">
          <FaSpinner className="spinner" />
        </div>
      ) : error ? (
        <div className="loading">
          <p className="error">{error}</p>
        </div>
      ) : (
        <>
          <Slider />
          <div className="hotel_list">
            <h1 className="main_heading">Hotels</h1>
            <div className="all_hotels">
              {Hotels && Hotels.length >= 1
                ? Hotels.map((hotel) => {
                    return <HotelCard key={hotel._id} hotel={hotel} />;
                  })
                : null}
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;
