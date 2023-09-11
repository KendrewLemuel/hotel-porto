import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="Contact-wrapper" id="contact">
      <div className="paddings innerWidth flexCenter Contact-container">
        <div className="flexColStart Contact-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart Contact-options">
            {/*Row 1  */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>0812 3455 5987</span>
                  </div>
                </div>
                <div className="flexCenter Button">call now!</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span>0812 3455 5987</span>
                  </div>
                </div>
                <div className="flexCenter Button">Chat now!</div>
              </div>
            </div>
            {/*Row 2 */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span>kendrewlemuel2</span>
                  </div>
                </div>
                <div className="flexCenter Button">call now!</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillPersonPlusFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Linked In</span>
                    <span>kendrew-lemuel</span>
                  </div>
                </div>
                <div className="flexCenter Button">Connect Now!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Contact-right">
          <div className="Image-container">
            <img src="././images/Contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
