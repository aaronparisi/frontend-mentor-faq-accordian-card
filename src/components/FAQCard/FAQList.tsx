import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { FAQItem } from "./FAQCard";
import FAQItemComponent from "./FAQItemComponent";

interface FAQListProps {
  setFaqSelected: Dispatch<SetStateAction<boolean>>;
  faqItems: FAQItem[];
}

const FAQList: React.FC<FAQListProps> = ({
  setFaqSelected,
  faqItems,
}): ReactElement => {
  return (
    <div className="faq-list-wrapper">
      <h1>FAQ</h1>
      <ul className="faq-list">
        {faqItems.map((faq: FAQItem) => {
          return (
            <FAQItemComponent
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              setFaqSelected={setFaqSelected}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FAQList;
