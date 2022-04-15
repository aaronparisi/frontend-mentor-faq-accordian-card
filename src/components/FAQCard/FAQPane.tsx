import React, { Dispatch, ReactElement, SetStateAction } from "react";

interface FAQPaneProps {
  setFaqSelected: Dispatch<SetStateAction<boolean>>;
}

const FAQPane: React.FC<FAQPaneProps> = ({ setFaqSelected }): ReactElement => {
  return (
    <div className="faq-pane">
      <button onClick={() => setFaqSelected((prev) => !prev)}>Toggle!</button>
    </div>
  );
};

export default FAQPane;
