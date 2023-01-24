import React from 'react';
import PropTypes from 'prop-types';
import StyledItem from './StatItem.styled';
import StyledStats from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StyledStats>
      <StyledItem>
        Good:<span>{good}</span>
      </StyledItem>
      <StyledItem>
        Neutral:<span>{neutral}</span>
      </StyledItem>
      <StyledItem>
        Bad:<span>{bad}</span>
      </StyledItem>
      <StyledItem>
        Total:
        <span>{total}</span>
      </StyledItem>
      <StyledItem>
        Positive feedback:
        <span>{positivePercentage}%</span>
      </StyledItem>
    </StyledStats>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
