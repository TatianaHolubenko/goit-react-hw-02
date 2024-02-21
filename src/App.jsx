import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setState({ ...state, [feedbackType]: state[feedbackType] + 1 });
  };

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        updateFeedback={(feedbackType) => updateFeedback(feedbackType)}
      />
      <Feedback value={state} />
    </>
  );
}
