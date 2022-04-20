import React, { useContext, useState } from "react";
import FAQCard from "./components/FAQCard/FAQCard";
import "./stylesheets/index.css";
import AtBox from "./images/illustration-box-desktop.svg";
import styled from "styled-components";
import BorderContext, { BorderContextProvider } from "./borderContext.js";

interface AtBoxWrapperProps {
  selectedFAQ: number;
  showBorders: boolean;
  //src: string;
}
const AtBoxWrapper = styled("div")<AtBoxWrapperProps>`
  width: ${({ selectedFAQ }): string =>
    selectedFAQ != -1 ? "140px" : "130px"};
  bottom: ${({ selectedFAQ }): string => (selectedFAQ != -1 ? "11vh" : "12vh")};
  border-width: ${({ showBorders }): string => (showBorders ? "1px" : "0px")};
`;

interface AtBoxSpacerProps {
  selectedFAQ: number;
  showBorders: boolean;
}

const AtBoxSpacer = styled("div")<AtBoxSpacerProps>`
  width: ${({ selectedFAQ }): string => (selectedFAQ != -1 ? "50%" : "0%")};
  border-width: ${({ showBorders }): string => (showBorders ? "1px" : "0px")};
`;

function App() {
  const [selectedFAQ, setSelectedFAQ] = useState<number>(-1);
  const [showBorders, setShowBorders] = useState<boolean>(false);

  const handleFAQClick = (clickedIdx: number): void => {
    setSelectedFAQ(clickedIdx);
  };

  const borderContextInfo = useContext(BorderContext);
  return (
    <div className="App">
      <button
        className="border-toggle-button"
        onClick={() => setShowBorders(!showBorders)}
      >
        {showBorders ? "Hide Borders" : "Show Borders"}
      </button>
      <BorderContextProvider value={{ showBorders: showBorders }}>
        <div className="faq-card-wrapper">
          <FAQCard selectedFAQ={selectedFAQ} handleFAQClick={handleFAQClick} />
          <AtBoxWrapper
            className="at-box-wrapper"
            selectedFAQ={selectedFAQ}
            showBorders={showBorders}
          >
            <AtBoxSpacer
              className="at-box-spacer"
              selectedFAQ={selectedFAQ}
              showBorders={showBorders}
            ></AtBoxSpacer>
            <div className="at-box-image">
              <img src={AtBox} alt="yellow box with at-sign on it" />
            </div>
          </AtBoxWrapper>
        </div>
      </BorderContextProvider>
    </div>
  );
}

export default App;
