import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { FAQItem } from "./FAQCard";
import FAQItemComponent from "./FAQItemComponent";

interface FAQListProps {
  selectedFAQ: number;
  handleFAQClick: (clickedIdx: number) => void;
  faqItems: FAQItem[];
}

const FAQList: React.FC<FAQListProps> = ({
  selectedFAQ,
  handleFAQClick,
  faqItems,
}): ReactElement => {
  return (
    <div className="faq-list-wrapper">
      <h1>FAQ</h1>
      <ul className="faq-list">
        {faqItems.map((faq: FAQItem, idx: number) => {
          return (
            <FAQItemComponent
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              selectedFAQ={selectedFAQ}
              handleFAQClick={handleFAQClick}
              thisIdx={idx}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FAQList;
