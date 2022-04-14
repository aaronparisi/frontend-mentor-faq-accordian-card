import React, { ReactElement } from "react";
import GraphicImage from "../../images/illustration-woman-online-desktop.svg";
import GraphicBG from "../../images/bg-pattern-desktop.svg";

interface FAQGraphicProps {}

const FAQGraphic: React.FC<FAQGraphicProps> = (): ReactElement => {
  console.log("hello from FAQGraphic!");

  return (
    <div className="faq-graphic-wrapper">
      <div className="faq-graphic">
        <img src={GraphicImage} className="graphic-image" />
      </div>
      <img src={GraphicBG} className="graphic-background" />
    </div>
  );
};

export default FAQGraphic;
