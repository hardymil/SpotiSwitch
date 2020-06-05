import styled from 'styled-components';

export const ToggleContainer = styled.button`
  background-color:${({ lightTheme }) => lightTheme ?  '#140B58' : ' #f1f1f1'};
  color:${({ lightTheme }) => lightTheme ?  '#fff' : ' #000'};
  border:0;
  border-radius:50%;
  position:fixed;
  top:15px;
  right:15px;
  cursor:pointer;
  transition: all 0.25s linear;
  &:hover{
    border-radius:0;
  }
  svg{
    padding:13px 10px;
    width:20px;
    height:20px;
  }
`;