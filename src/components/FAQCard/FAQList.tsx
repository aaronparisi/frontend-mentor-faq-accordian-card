import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { FAQItem } from "./FAQCard";
import FAQItemComponent from "./FAQItemComponent";

interface FAQListProps {
  selectedFAQ: number;
  setSelectedFAQ: Dispatch<SetStateAction<number>>;
  faqItems: FAQItem[];
}

const FAQList: React.FC<FAQListProps> = ({
  selectedFAQ,
  setSelectedFAQ,
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
              setSelectedFAQ={setSelectedFAQ}
              thisIdx={idx}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FAQList;
