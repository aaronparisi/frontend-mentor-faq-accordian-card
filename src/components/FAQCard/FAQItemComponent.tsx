import React, {
  Dispatch,
  SetStateAction,
  ReactElement,
  useState,
  useContext,
} from "react";
import styled from "styled-components";
import colors from "../../stylesheets/_export.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import BorderContext from "../../borderContext";

interface FAQItemComponentProps {
  question: string;
  answer: string;
  selectedFAQ: number;
  handleFAQClick: (clickedIdx: number) => void;
  thisIdx: number;
}

interface QuestionProps {
  selectedFAQ: number;
  thisIdx: number;
}

const Question = styled("div")<QuestionProps>`
  background-color: ${({ selectedFAQ, thisIdx }): string =>
    selectedFAQ === thisIdx ? `${colors.mediumorange}` : ``};
  transition: ${({ selectedFAQ, thisIdx }): string =>
    selectedFAQ === thisIdx ? "background-color .5s ease-out" : ""};
`;

interface AnswerWrapperProps {
  selectedFAQ: number;
  thisIdx: number;
}

const AnswerWrapper = styled("div")<AnswerWrapperProps>`
  height: ${({ selectedFAQ, thisIdx }): string =>
    selectedFAQ === thisIdx ? "100px" : "0px"};
`;

interface StyledFAQItemProps {
  selectedFAQ: number;
  thisIdx: number;
}

const StyledFAQItem = styled("li")<StyledFAQItemProps>`
  &:hover ${Question} {
    background-color: ${({ selectedFAQ, thisIdx }): string =>
      selectedFAQ === thisIdx
        ? `${colors.mediumorange}`
        : `${colors.lightorange}`};
  }
`;

const FAQItemComponent: React.FC<FAQItemComponentProps> = ({
  question,
  answer,
  selectedFAQ,
  handleFAQClick,
  thisIdx,
}): ReactElement => {
  const callHandleClick = (): void => {
    handleFAQClick(selectedFAQ === thisIdx ? -1 : thisIdx);
  };
  const borderContextInfo = useContext(BorderContext);

  return (
    <StyledFAQItem
      selectedFAQ={selectedFAQ}
      thisIdx={thisIdx}
      className="faq-item-component"
      onClick={() => callHandleClick()}
    >
      <Question
        className="question"
        selectedFAQ={selectedFAQ}
        thisIdx={thisIdx}
      >
        <div
          className="question-text"
          style={{ borderWidth: borderContextInfo.showBorders ? "1px" : "0px" }}
        >
          {question}
        </div>
        <MdKeyboardArrowDown
          className="open-close-arrow"
          style={{
            color: colors.orange,
            transform: selectedFAQ === thisIdx ? "scaleY(-1)" : "none",
            borderWidth: borderContextInfo.showBorders ? "1px" : "0px",
          }}
        />
      </Question>
      <AnswerWrapper
        className="answer-wrapper"
        selectedFAQ={selectedFAQ}
        thisIdx={thisIdx}
      >
        <div className="answer">{answer}</div>
      </AnswerWrapper>
    </StyledFAQItem>
  );
};

export default FAQItemComponent;
