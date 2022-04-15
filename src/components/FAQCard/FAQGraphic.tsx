import React, { ReactElement } from "react";
import GraphicImage from "../../images/illustration-woman-online-desktop.svg";
import GraphicBG from "../../images/bg-pattern-desktop.svg";
import styled from "styled-components";

interface FAQGraphicProps {
  faqSelected: boolean;
}

interface StyledDivProps {
  faqSelected: boolean;
}

const StyledDiv = styled("div")<StyledDivProps>`
  width: ${({ faqSelected }): string => (faqSelected ? "400px" : "400px")};
  right: ${({ faqSelected }): string =>
    faqSelected ? "calc(100% - 35vw)" : "calc(100% - 35vw)"};
  margin-top: ${({ faqSelected }): string => (faqSelected ? "20px" : "0px")};
`;

const FAQGraphic: React.FC<FAQGraphicProps> = ({
  faqSelected,
}): ReactElement => {
  console.log("hello from FAQGraphic!");

  return (
    <StyledDiv className="faq-graphic-wrapper" faqSelected={faqSelected}>
      <div className="faq-graphic">
        <img src={GraphicImage} className="graphic-image" />
      </div>
      <img src={GraphicBG} className="graphic-background" />
    </StyledDiv>
  );
};

export default FAQGraphic;
