import React, { ReactElement } from "react";

interface FAQCardProps {}

const FAQCard: React.FC<FAQCardProps> = (): ReactElement => {
  console.log("hello from FAQCard");

  return <div className="faq-card">Hello from FAQCard</div>;
};

export default FAQCard;
