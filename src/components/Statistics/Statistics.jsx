import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="statistics">
    <li className="stat_item">
      Good:<span className="value">{good}</span>
    </li>
    <li className="stat_item">
      Neutral:<span className="value">{neutral}</span>
    </li>
    <li className="stat_item">
      Bad:<span className="value">{bad}</span>
    </li>
    <li className="stat_item">
      Total:
      <span className="value">{total}</span>
    </li>
    <li className="stat_item">
      Positive feedback:
      <span className="value">{positivePercentage}%</span>
    </li>
  </ul>
);

export default Statistics;
