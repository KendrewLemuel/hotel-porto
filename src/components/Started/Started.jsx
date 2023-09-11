import React from "react";
import "./Started.css";

const Started = () => {
  return (
    <section className="Start-wrappper" id="started">
      <div className="paddings innerWidth start-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">get started with KWLTJ</span>
          <span className="secondaryText">
            find your dream house here with low price!
          </span>
          <span className="orangeText"> Get Started Now!</span>
          <button className=" Button">
            <a href="mailto:kendrewlemuel2@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Started;
