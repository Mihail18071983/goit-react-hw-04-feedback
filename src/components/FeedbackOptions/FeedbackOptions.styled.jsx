import styled from 'styled-components';

export const StyledBtn = styled.button`
  background-color: #fff;
  border: 1px solid teal;
  border-radius: 5px;
  color: ${props => {
    switch (props.children) {
      case 'good':
        return '#00ff00';
      case 'neutral':
        return '#0000ff';
      case 'bad':
        return '#ff0000';
      default:
        return '#000';
    }
  }};
  transition: background-color 0.25s cubic-bezier(0.05, 0.97, 1, 0.08),
    color 0.25s cubic-bezier(0.05, 0.97, 1, 0.08);

  &:hover {
    background-color: blue;
    color: black;
  }
`;

export default StyledBtn;
