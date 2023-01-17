import styled from 'styled-components';


export const StyledBtn = styled.button`
background-color:#fff;
border: 1px solid teal;
border-radius:5px;
color: ${props=>{
  switch(props.children){
  case 'good':return "#00ff00";
  case 'neutral':return "#0000ff";
  case 'bad': return "#ff0000";
  default: return "#000"
}}};

&:hover {
background-color:blue;
color: black;
}
`;

export default StyledBtn



