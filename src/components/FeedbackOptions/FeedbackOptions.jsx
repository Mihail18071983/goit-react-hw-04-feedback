import React from 'react';
import PropTypes from 'prop-types';
import StyledBtn from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <StyledBtn
      key={option}
      onClick={() => onLeaveFeedback(option)}
      type="button"
    >
      {option}
    </StyledBtn>
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes ={
  options:PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback:PropTypes.func.isRequired
}