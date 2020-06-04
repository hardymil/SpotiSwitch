import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getMusics} from '../../actions/musics'
import Track from '../../components/Track'
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 22px;
`
const StyledFlex = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  max-width: 1440px;
  margin: auto;
`
const Musics = () => {
  const dispatch = useDispatch()
  const musics = useSelector(state => state.genres.musics)
  useEffect(() => {
    dispatch(getMusics())
  }, [])
  console.log(musics)
  return (
    <div>
      <StyledTitle>Notre selection musicale que nous avons choisi pour vous :</StyledTitle>
      <StyledFlex>
        {musics.map(music => (
            <Track
              key={music.id}
              albumImage={music.albumId}
              track={music.name}
              artist={music.artistName}
            />
        ))}
      </StyledFlex>
    </div>
  );
};

export default Musics;
