
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
`

export const StyledButton = styled.button`
  background-color: #FFF0F2;
  border:none;
  color:#FF5975; 
  border-radius:50%;
  width:100%;
  height:150px;
  max-width:150px;
  max-height:150px;
  transition-duration:0.3s;
  margin: 35px;
  text-align: center;
  font-size:14px;
  &:hover{
    background-color:#FF5975;
    color:#fff; 
    box-shadow: #FF5975 0 8px 12px;
  }
`

export const StyledTitle = styled.h1`
  text-align: center;

  font-size: 22px;
`

export const StyledLink = styled.button`
    background-color:#06A800;
    position:fixed;
    bottom:0;
    border:none;
    text-align:center;
    width:100%;
      a{
        color:#fff;
        display:block;
        padding: 25px 0;
        width:100%;
        text-decoration:none;
      }
    `