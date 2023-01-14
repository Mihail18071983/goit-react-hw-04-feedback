import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';

export class App extends Component {
  // static defaultProps = {};
  // static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGoodBtn = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleClickNeutralBtn = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleClickBadBtn = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFidback = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return positiveFidback || '';
  };

  render() {
    return (
      <>
        <div className="feedback_wrapper">
          <p className="feedback_title">Please leave the feedback</p>
          <div className="btn_wrapper">
            <button type='button' onClick={this.handleClickGoodBtn} className="btn">
              Good
            </button>
            <button type='button' onClick={this.handleClickNeutralBtn} className="btn">
              Neutral
            </button>
            <button type='button' onClick={this.handleClickBadBtn} className="btn">
              Bad
            </button>
          </div>

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </>
    );
  }
}

// export const App = () => {
//   return (
//  <></>
//   );
// };
