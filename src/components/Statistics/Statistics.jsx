import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledStats = styled.ul`
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
`;

const StyledItem = styled.li`
  font-size: 12px;
  font-weight: 500;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

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
