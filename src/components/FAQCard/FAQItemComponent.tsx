import React, { Dispatch, SetStateAction, ReactElement, useState } from "react";

interface FAQItemComponentProps {
  question: string;
  answer: string;
  setFaqSelected: Dispatch<SetStateAction<boolean>>;
}

const FAQItemComponent: React.FC<FAQItemComponentProps> = ({
  question,
  answer,
  setFaqSelected,
}): ReactElement => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = (): void => {
    console.log("clicked on someone!");

    setIsSelected(!isSelected);
    setFaqSelected((value: React.SetStateAction<boolean>) => !value);
  };

  return (
    <div className="faq-item-component" onClick={() => handleClick()}>
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </div>
  );
};

export default FAQItemComponent;
