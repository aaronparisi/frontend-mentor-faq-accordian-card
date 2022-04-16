import React, { Dispatch, ReactElement, SetStateAction } from "react";
import FAQGraphic from "./FAQGraphic";
import FAQList from "./FAQList";

interface FAQCardProps {
  faqSelected: boolean;
  setFaqSelected: Dispatch<SetStateAction<boolean>>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

const FAQItems: FAQItem[] = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan.  There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer: "All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click 'Forgot password' from the login page or 'Change Password' from your profile page.  A reset link will be e-mailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we'll process your request no questions asked.",
  },
];

const FAQCard: React.FC<FAQCardProps> = ({
  faqSelected,
  setFaqSelected,
}): ReactElement => {
  console.log("hello from FAQCard");

  return (
    <div className="faq-card">
      <FAQGraphic faqSelected={faqSelected} />
      <FAQList setFaqSelected={setFaqSelected} faqItems={FAQItems} />
    </div>
  );
};

export default FAQCard;
