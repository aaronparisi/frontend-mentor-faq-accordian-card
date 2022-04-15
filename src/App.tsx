import React, { useState } from "react";
import FAQCard from "./components/FAQCard/FAQCard";
import "./stylesheets/index.css";
import AtBox from "./images/illustration-box-desktop.svg";
import styled from "styled-components";

interface AtBoxWrapperProps {
  faqSelected: boolean;
  //src: string;
}
const AtBoxWrapper = styled("div")<AtBoxWrapperProps>`
  width: ${({ faqSelected }): string => (faqSelected ? "140px" : "130px")};
  bottom: ${({ faqSelected }): string => (faqSelected ? "11vh" : "12vh")};
`;

interface AtBoxSpacerProps {
  faqSelected: boolean;
}

const AtBoxSpacer = styled("div")<AtBoxSpacerProps>`
  width: ${({ faqSelected }): string => (faqSelected ? "50%" : "0%")};
`;

function App() {
  console.log("hello from App!");

  const [faqSelected, setFaqSelected] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="faq-card-wrapper">
        <FAQCard faqSelected={faqSelected} setFaqSelected={setFaqSelected} />
        <AtBoxWrapper className="at-box-wrapper" faqSelected={faqSelected}>
          <AtBoxSpacer
            className="at-box-spacer"
            faqSelected={faqSelected}
          ></AtBoxSpacer>
          <div className="at-box-image">
            <img src={AtBox} alt="yellow box with at-sign on it" />
          </div>
        </AtBoxWrapper>
      </div>
    </div>
  );
}

export default App;
