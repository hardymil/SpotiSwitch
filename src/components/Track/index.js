import React from 'react'
import {StyledCard,StyledTitle, StyledArtist, StyledImg} from './styles';

const Track = props => {
  return (
    <StyledCard>
      <StyledImg src={`https://api.napster.com/imageserver/v2/albums/${props.albumImage}/images/300x300.jpg`} alt='' />
      <StyledTitle>{props.track}</StyledTitle>
      <StyledArtist>{props.artist}</StyledArtist>
    </StyledCard>
  )
}

export default Track
