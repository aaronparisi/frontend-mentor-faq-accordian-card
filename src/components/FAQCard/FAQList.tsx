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
    <ul className="faq-list">
      {faqItems.map((faq: FAQItem) => {
        return (
          <li key={faq.question}>
            <FAQItemComponent
              question={faq.question}
              answer={faq.answer}
              setFaqSelected={setFaqSelected}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FAQList;
