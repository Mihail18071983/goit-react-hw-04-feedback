import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './StyledTitle';
import StyledContainer from './StiledContainer';

const Section = ({ title, children }) => (
  <>
    {title && <StyledTitle>{title}</StyledTitle>}
    <StyledContainer>{children}</StyledContainer>
  </>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children:PropTypes.element.isRequired,
};
