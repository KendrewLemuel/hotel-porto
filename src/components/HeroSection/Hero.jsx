import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="Hero-wrapper">
      <div className="paddings innerWidth flexCenter Hero-container">
        {/*ini bagian kiri dari hero section */}
        <div className="flexColStart Hero-left">
          <div className="Hero-title">
            <div className="Orange" />
            <h1>
              Discover
              <br /> More Suitable <br />
              Property
            </h1>
            <div className="flexColStart secondaryText Hero-desc">
              <span>Temukan Rumah Impianmu dengan Lebih Mudah</span>
              <span>Rumah yang Anda Cari, Hanya Sejauh Klik</span>
            </div>
          </div>

          <div className="flexCenter Search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="Button">Search</button>
          </div>

          <div className="flexCenter Stats">
            <div className="flexColCenter Stat">
              <span>
                <CountUp start={20} end={219} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">house available</span>
            </div>

            <div className="flexColCenter Stat">
              <span>
                <CountUp start={20} end={108} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">house Booked</span>
            </div>

            <div className="flexColCenter Stat">
              <span>
                <CountUp start={20} end={399} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">house Used</span>
            </div>
          </div>
        </div>
        {/*ini bagian kanan dari hero section */}
        <div className="Hero-right">
          <div className="Image-container">
            <img src="././images/hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
