import React from 'react';

const Section = ({ title, children }) => (
  <>
    {title && <p className="feedback_title">{title}</p>}
    {children}
  </>
);

export default Section;
