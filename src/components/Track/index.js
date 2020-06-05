import React from 'react'
import {Link} from 'react-router-dom';
import {StyledCard,StyledTitle,StyledLink, StyledArtist, StyledImg} from './styles';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Track = props => {
  return (
    <>
    <StyledCard>
      <StyledImg src={`https://api.napster.com/imageserver/v2/albums/${props.albumImage}/images/300x300.jpg`} alt='' />
      <StyledTitle>{props.track}</StyledTitle>
      <StyledArtist>{props.artist}</StyledArtist>
      <AudioPlayer
        src={props.previewUrl}
        onPlay={e => console.log("onPlay")}
        customAdditionalControls={[]}
      />
    </StyledCard>
    
    <StyledLink>
    < Link to='/genres'>Back</Link>
   </StyledLink>
  </>
  )
}

export default Track
