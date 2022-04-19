import React, { useState } from "react";
import FAQCard from "./components/FAQCard/FAQCard";
import "./stylesheets/index.css";
import AtBox from "./images/illustration-box-desktop.svg";
import styled from "styled-components";

interface AtBoxWrapperProps {
  selectedFAQ: number;
  //src: string;
}
const AtBoxWrapper = styled("div")<AtBoxWrapperProps>`
  width: ${({ selectedFAQ }): string =>
    selectedFAQ != -1 ? "140px" : "130px"};
  bottom: ${({ selectedFAQ }): string => (selectedFAQ != -1 ? "11vh" : "12vh")};
`;

interface AtBoxSpacerProps {
  selectedFAQ: number;
}

const AtBoxSpacer = styled("div")<AtBoxSpacerProps>`
  width: ${({ selectedFAQ }): string => (selectedFAQ != -1 ? "50%" : "0%")};
`;

function App() {
  const [selectedFAQ, setSelectedFAQ] = useState<number>(-1);

  const handleFAQClick = (clickedIdx: number): void => {
    setSelectedFAQ(clickedIdx);
  };

  return (
    <div className="App">
      <div className="faq-card-wrapper">
        <FAQCard selectedFAQ={selectedFAQ} handleFAQClick={handleFAQClick} />
        <AtBoxWrapper className="at-box-wrapper" selectedFAQ={selectedFAQ}>
          <AtBoxSpacer
            className="at-box-spacer"
            selectedFAQ={selectedFAQ}
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
