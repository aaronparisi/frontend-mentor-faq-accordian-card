import React, { Dispatch, SetStateAction, ReactElement, useState } from "react";
import styled from "styled-components";
import colors from "../../stylesheets/_export.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

interface FAQItemComponentProps {
  question: string;
  answer: string;
  selectedFAQ: number;
  setSelectedFAQ: Dispatch<SetStateAction<number>>;
  thisIdx: number;
}

interface QuestionProps {
  selectedFAQ: number;
  thisIdx: number;
}

const Question = styled("div")<QuestionProps>`
  background-color: ${({ selectedFAQ, thisIdx }): string =>
    selectedFAQ === thisIdx ? `${colors.mediumorange}` : ``};
`;

interface AnswerWrapperProps {
  selectedFAQ: number;
  thisIdx: number;
}

const AnswerWrapper = styled("p")<AnswerWrapperProps>`
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
  setSelectedFAQ,
  thisIdx,
}): ReactElement => {
  const handleClick = (): void => {
    setSelectedFAQ(selectedFAQ === thisIdx ? -1 : thisIdx);
  };

  return (
    <StyledFAQItem
      selectedFAQ={selectedFAQ}
      thisIdx={thisIdx}
      className="faq-item-component"
      onClick={() => handleClick()}
    >
      <Question
        className="question"
        selectedFAQ={selectedFAQ}
        thisIdx={thisIdx}
      >
        {question}
      </Question>
      <AnswerWrapper
        className="answer-wrapper"
        selectedFAQ={selectedFAQ}
        thisIdx={thisIdx}
      >
        <div className="answer">{answer}</div>
      </AnswerWrapper>
      <MdKeyboardArrowDown
        className="open-close-arrow"
        style={{
          color: colors.orange,
          transform: selectedFAQ === thisIdx ? "scaleY(-1)" : "none",
        }}
      />
    </StyledFAQItem>
  );
};

export default FAQItemComponent;
