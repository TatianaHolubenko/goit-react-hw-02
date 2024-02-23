import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const initialState = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [state, setState] = useState(() => {
    const stateValue = window.localStorage.getItem("savedСlicks");

    if (stateValue !== null) {
      return JSON.parse(stateValue);
    }

    return initialState;
  });

  const updateFeedback = (feedbackType) => {
    setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setState(initialState);
  };

  useEffect(() => {
    window.localStorage.setItem("savedСlicks", JSON.stringify(state));
  }, [state]);

  const totalFeedback = state.good + state.neutral + state.bad;
  const round = Math.round(
    ((state.good + state.neutral) / totalFeedback) * 100
  );
  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback ? (
        <Feedback value={state} totalFeedback={totalFeedback} round={round} />
      ) : (
        <Notification text={"No feedback yet"} />
      )}
    </>
  );
}
