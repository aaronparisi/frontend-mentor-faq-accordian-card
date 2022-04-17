import React, { ReactElement } from "react";
import GraphicImage from "../../images/illustration-woman-online-desktop.svg";
import GraphicBG from "../../images/bg-pattern-desktop.svg";
import styled from "styled-components";

interface FAQGraphicProps {
  selectedFAQ: number;
}

interface StyledDivProps {
  selectedFAQ: number;
}

const StyledDiv = styled("div")<StyledDivProps>`
  width: ${({ selectedFAQ }): string =>
    selectedFAQ !== -1 ? "400px" : "400px"};
  margin-top: ${({ selectedFAQ }): string =>
    selectedFAQ !== -1 ? "20px" : "0px"};
`;

const FAQGraphic: React.FC<FAQGraphicProps> = ({
  selectedFAQ,
}): ReactElement => {
  console.log("hello from FAQGraphic!");

  return (
    <StyledDiv className="faq-graphic-wrapper" selectedFAQ={selectedFAQ}>
      <div className="faq-graphic">
        <img src={GraphicImage} className="graphic-image" />
      </div>
      <img src={GraphicBG} className="graphic-background" />
    </StyledDiv>
  );
};

export default FAQGraphic;
