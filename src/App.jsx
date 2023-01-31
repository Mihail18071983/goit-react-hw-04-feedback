import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import styled from 'styled-components';

const AppWrapperStyled = styled.div`
  margin-left: 30px;
`;

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const statePropNames = Object.keys(feedback);

  const onLeaveFeedback = feedback => {
    setFeedback(prevState => {
      const value=prevState[feedback]
      return {
        ...prevState,
        [feedback]: value+1,
      };
    });
  };

  const countTotalFeedback = () => {
    let total = 0;
    for (const statePropName of statePropNames) {
      total += feedback[statePropName];
    }
    return total;
  }

  const countPositiveFeedbackPercentage=() =>{
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positiveFidback = Math.round(
      (feedback.good * 100) / total
    );
    return positiveFidback;
  };

  return (
      <AppWrapperStyled>
        <Section title="Please leave the feedback">
          <FeedbackOptions
            options={statePropNames}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        {countTotalFeedback() !== 0 && (
          <Section title="Statistics">
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}

        {countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
      </AppWrapperStyled>
    );
};

export default App;

