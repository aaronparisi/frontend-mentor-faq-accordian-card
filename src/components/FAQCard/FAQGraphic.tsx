import React, { ReactElement, useContext } from "react";
import GraphicImage from "../../images/illustration-woman-online-desktop.svg";
import GraphicBG from "../../images/bg-pattern-desktop.svg";
import styled from "styled-components";
import BorderContext from "../../borderContext";

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

interface ImageWrapperProps {
  selectedFAQ: number;
}

const ImageWrapper = styled("div")<ImageWrapperProps>`
  bottom: ${({ selectedFAQ }): string => (selectedFAQ !== -1 ? "0vh" : "-8vh")};
`;

const FAQGraphic: React.FC<FAQGraphicProps> = ({
  selectedFAQ,
}): ReactElement => {
  const borderContextInfo = useContext(BorderContext);

  return (
    <StyledDiv className="faq-graphic-wrapper" selectedFAQ={selectedFAQ}>
      <div
        className="faq-graphic"
        style={{ borderWidth: borderContextInfo.showBorders ? "1px" : "0px" }}
      >
        <img src={GraphicImage} className="graphic-image" />
      </div>
      <ImageWrapper
        selectedFAQ={selectedFAQ}
        className="graphic-background-wrapper"
      >
        <img
          src={GraphicBG}
          className="graphic-background"
          style={{ filter: selectedFAQ !== -1 ? "none" : "blur(2px)" }}
        />
      </ImageWrapper>
    </StyledDiv>
  );
};

export default FAQGraphic;
