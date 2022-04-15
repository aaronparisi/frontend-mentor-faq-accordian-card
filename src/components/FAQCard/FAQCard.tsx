import React, { Dispatch, ReactElement, SetStateAction } from "react";
import FAQGraphic from "./FAQGraphic";
import FAQPane from "./FAQPane";

interface FAQCardProps {
  faqSelected: boolean;
  setFaqSelected: Dispatch<SetStateAction<boolean>>;
}

const FAQCard: React.FC<FAQCardProps> = ({
  faqSelected,
  setFaqSelected,
}): ReactElement => {
  console.log("hello from FAQCard");

  return (
    <div className="faq-card">
      <FAQGraphic faqSelected={faqSelected} />
      <FAQPane setFaqSelected={setFaqSelected} />
    </div>
  );
};

export default FAQCard;
