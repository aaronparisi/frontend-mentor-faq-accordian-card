import React, { ReactElement } from "react";
import FAQGraphic from "./FAQGraphic";
import FAQPane from "./FAQPane";

interface FAQCardProps {}

const FAQCard: React.FC<FAQCardProps> = (): ReactElement => {
  console.log("hello from FAQCard");

  return (
    <div className="faq-card">
      <FAQGraphic />
      <FAQPane />
    </div>
  );
};

export default FAQCard;
