import React from 'react'

const Track = props => {
  return (
    <li>
      <img src={`https://api.napster.com/imageserver/v2/albums/${props.albumImage}/images/300x300.jpg`} alt='' />
      <p>{props.track}</p>
      <p>{props.artist}</p>
    </li>
  )
}

export default Track
