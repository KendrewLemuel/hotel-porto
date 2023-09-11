import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="paddings innerWidth flexCenter footer-container">
        {/*left side*/}
        <div className="flexColStart footer-left">
          <img src="././images/logo1.png" alt="" width={120} />
          <span className="secondaryText">
            the only right place to make your wishes <br />
            Come True
          </span>
        </div>
        <div className="flexColStart footer-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">PT global KWLTJ</span>
          <div className="flexCenter footer-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
