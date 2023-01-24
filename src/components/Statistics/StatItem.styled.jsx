import styled from "styled-components";

const StyledItem = styled.li`
  font-size: 12px;
  font-weight: 500;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export default StyledItem