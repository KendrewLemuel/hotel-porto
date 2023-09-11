import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
import { Item } from "@syncfusion/ej2-react-navigations";

const Value = () => {
  return (
    <section className="Value-wrapper" id="value">
      <div className="paddings innerWidth flexCenter Value-container">
        {/*left side*/}
        <div className="Value-left">
          <div className="Image-container">
            <img src="././images/value.png" alt="" />
          </div>
        </div>
        {/*right side */}
        <div className="flexColStart value-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to customer</span>
          <span className="secondaryText">
            Discover a wide range of rental properties on our website, tailored
            to suit your specific preferences and needs.
            <br />
            Find the perfect rental property effortlessly with our advanced
            search filters and comprehensive listings.
          </span>

          <Accordion
            className="Accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className="AccordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter AccordionButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
