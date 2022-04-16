import React, { Dispatch, SetStateAction, ReactElement, useState } from "react";
import styled from "styled-components";
import colors from "../../stylesheets/_export.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

interface FAQItemComponentProps {
  question: string;
  answer: string;
  setFaqSelected: Dispatch<SetStateAction<boolean>>;
}

interface QuestionProps {
  isSelected: boolean;
}

const Question = styled("div")<QuestionProps>`
  font-weight: ${({ isSelected }): string => (isSelected ? "bold" : "normal")};
`;

interface AnswerProps {
  isSelected: boolean;
}

const Answer = styled("div")<AnswerProps>`
  display: ${({ isSelected }): string => (isSelected ? "block" : "none")};
`;

interface StyledFAQItemProps {
  isSelected: boolean;
}

const StyledFAQItem = styled("li")<StyledFAQItemProps>`
  &:hover ${Question} {
    color: ${({ isSelected }): string => (isSelected ? "black" : "green")};
  }
`;

const FAQItemComponent: React.FC<FAQItemComponentProps> = ({
  question,
  answer,
  setFaqSelected,
}): ReactElement => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsSelected(!isSelected);
    setFaqSelected((value: React.SetStateAction<boolean>) => !value);
  };

  return (
    <StyledFAQItem
      isSelected={isSelected}
      className="faq-item-component"
      onClick={() => handleClick()}
    >
      <Question className="question" isSelected={isSelected}>
        {question}
      </Question>
      <Answer className="answer" isSelected={isSelected}>
        {answer}
      </Answer>
      <MdKeyboardArrowDown
        className="open-close-arrow"
        style={{
          color: colors.orange,
          transform: isSelected ? "rotate(180deg)" : "none",
        }}
      />
    </StyledFAQItem>
  );
};

export default FAQItemComponent;
