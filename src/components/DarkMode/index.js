import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
  background-color: #140B58;
  max-width:35px;
  max-height:35px;
  padding:15px;
  border-radius:50%;
  position:fixed;
  top:25px;
  right:25px;
  cursor:pointer;
  transition: all 0.25s linear;
  &:hover{
    border-radius:0;
  }
`;
const DarkMode = () => {
  return(
    <StyledIcon src='/img/moon.png' onClick={ () => {
      console.log('coucou');
    }}></StyledIcon>
  )
}

export default DarkMode;