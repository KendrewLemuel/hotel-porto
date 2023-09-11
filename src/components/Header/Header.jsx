import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [openMenu, setMenu] = useState(false);

  const getMenu = (openMenu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !openMenu && "-100%" };
    }
  };
  return (
    <section className="Head-wrapper">
      <div className="flexCenter paddings innerWidth Head-container">
        <img src="././images/logo1.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
          <div className="flexCenter Head-menu" style={getMenu(openMenu)}>
            <Link
              to="resident"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Residencies
            </Link>
            <Link
              to="value"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Our Value
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact Us
            </Link>
            <Link
              to="started"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Get Started
            </Link>
            <button className="Button">
              <a href="#">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenu((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
