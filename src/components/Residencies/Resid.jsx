import React from "react";
import "./Resid.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Resid = () => {
  return (
    <section className="Res-wrapper" id="resident">
      <div className="paddings innerWidth Res-container">
        <div className="Res-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residences</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart Res-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText Res-price">
                  <span style={{ color: "green" }}>RP</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Resid;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter Res-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
