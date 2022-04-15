import React, { useState } from "react";
import FAQCard from "./components/FAQCard/FAQCard";
import "./stylesheets/index.css";
import AtBox from "./images/illustration-box-desktop.svg";
import styled from "styled-components";

interface StyledDivProps {
  faqSelected: boolean;
  //src: string;
}
const StyledDiv = styled("div")<StyledDivProps>`
  height: ${({ faqSelected }): string => (faqSelected ? "160px" : "130px")};
  width: ${({ faqSelected }): string => (faqSelected ? "160px" : "130px")};
  right: ${({ faqSelected }): string =>
    faqSelected ? "calc(100% - 35vw + 250px)" : "calc(100% - 35vw + 280px)"};
  bottom: ${({ faqSelected }): string => (faqSelected ? "14vh" : "12vh")};
`;

function App() {
  console.log("hello from App!");

  const [faqSelected, setFaqSelected] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="faq-card-wrapper">
        <FAQCard faqSelected={faqSelected} setFaqSelected={setFaqSelected} />
        <StyledDiv className="at-box" faqSelected={faqSelected}>
          <img src={AtBox} alt="yellow box with at-sign on it" />
        </StyledDiv>
      </div>
    </div>
  );
}

export default App;
