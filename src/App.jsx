import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
ul,li {
  margin: 0;
  padding: 0;
  text-decoration:none;
  list-style:none;
}
p {
  margin: 0;
  padding:0;
}
a {
  text-decoration: none;
  font-style: normal;
}

button {
  cursor: pointer;
  padding: 5px 10px;
  outline:none
}
`;

const AppWrapperStyled = styled.div`
  margin-left: 30px;
`;

export class App extends Component {
  // static defaultProps = {};
  // static propTypes = {

  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statePropNames = Object.keys(this.state);

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = 0;
    for (const statePropName of this.statePropNames) {
      total += this.state[statePropName];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFidback = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return positiveFidback || '';
  };

  render() {
    return (
      <AppWrapperStyled>
        <GlobalStyle />
        <Section title="Please leave the feedback" className="section">
          <FeedbackOptions
            options={this.statePropNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.countTotalFeedback() !== 0 && (
          <Section title="Statistics" className="section">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}

        {this.countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
      </AppWrapperStyled>
    );
  }
}
