import styled from 'styled-components';

export const StyledCard= styled.article`
  max-width:300px;
  border: 1px #b3b3b3 solid;
  border-radius: 5px;
  margin: 20px auto;
  position: relative;
  box-shadow: #888888 0 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:last-child{
    margin-bottom:45px;
  }
`

export const StyledTitle = styled.p`
  padding:15px;
  margin:0;
`

export const StyledArtist = styled.p`
  position:absolute;
  top: 237px;
  left: -20px;
  padding: 15px;
  background: #FF4060;
  color: #fff;
`

export const StyledImg= styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius 5px;
  border-bottom: 1px solid #b3b3b3;
`
export const StyledLink = styled.button`
    background-color:#06A800;
    position:fixed;
    left:0;
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
    