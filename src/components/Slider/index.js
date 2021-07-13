import React, { useState } from "react";
import "./index.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () => {
    setActiveSlide(activeSlide + 1);

    let images = document.querySelectorAll(".slide_item");
    images[activeSlide].classList.add("active");

    if (activeSlide + 1 === images.length) {
      setActiveSlide(0);
    }
  };

  const previous = () => {
    setActiveSlide(activeSlide - 1);

    let images = document.querySelectorAll(".slide_item");
    images[activeSlide].classList.add("active");

    if (activeSlide === 0) {
      setActiveSlide(images.length - 1);
    }
  };

  return (
    <div className="slider">
      <div className="slider_buttons">
        <button
          onClick={() => setActiveSlide(0)}
          className={`slider_indicators ${activeSlide === 0 && "active"}`}
        ></button>
        <button
          onClick={() => setActiveSlide(1)}
          className={`slider_indicators ${activeSlide === 1 && "active"}`}
        ></button>
        <button
          onClick={() => setActiveSlide(2)}
          className={`slider_indicators ${activeSlide === 2 && "active"}`}
        ></button>
      </div>

      <div className="slides">
        <div className={`slide_item ${activeSlide === 0 && "active"}`}>
          <img src={banner1} alt="banner" />
          <div className="slide_caption">
            <h1>Five star hotels</h1>
            <p>Get luxurious hotels</p>
          </div>
        </div>

        <div className={`slide_item ${activeSlide === 1 && "active"}`}>
          <img src={banner2} alt="banner" />
          <div className="slide_caption">
            <h1>Luxury rooms</h1>
            <p>Live on your dream room</p>
          </div>
        </div>

        <div className={`slide_item ${activeSlide === 2 && "active"}`}>
          <img src={banner3} alt="banner" />
          <div className="slide_caption">
            <h1>Swimming pools</h1>
            <p>Swim on your dreams</p>
          </div>
        </div>
      </div>

      <div className="slider_controlls">
        <button className="slider_previous_controll" onClick={previous}>
          {"<"}
        </button>
        <button className="slider_next_controll" onClick={next}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
