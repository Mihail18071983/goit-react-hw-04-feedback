import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.p`
  margin: 0;
  margin-bottom: 15px;
  font-weight:600;
  font-size:16px;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom:30px
`;

const Section = ({ title, children }) => (
  <>
    {title && <StyledTitle>{title}</StyledTitle>}
    <StyledContainer>{children}</StyledContainer>
  </>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
