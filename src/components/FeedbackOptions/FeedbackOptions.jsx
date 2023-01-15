import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button key={option} onClick={onLeaveFeedback} type="button" className="btn">
      {option}
    </button>
  ));
};

export default FeedbackOptions;
