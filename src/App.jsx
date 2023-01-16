import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export class App extends Component {
  // static defaultProps = {};
  // static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statePropNames = Object.keys(this.state);

  // onLeaveFeedback = e => {
  //   console.log(e);
  //   if (e.target.innerText === 'good') {
  //     this.setState(prevState => {
  //       return { good: prevState.good + 1 };
  //     });
  //   }

  //   if (e.target.innerText === 'neutral') {
  //     this.setState(prevState => {
  //       return { neutral: prevState.neutral + 1 };
  //     });
  //   }

  //   if (e.target.innerText === 'bad') {
  //     this.setState(prevState => {
  //       return { bad: prevState.bad + 1 };
  //     });
  //   }
  // };

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
      <>
        <Section title="Please leave the feedback" className="section">
          <FeedbackOptions
            options={this.statePropNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section className="section">
          {this.countTotalFeedback() !== 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        {this.countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
