import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getMusics} from '../../actions/musics'
import Track from '../../components/Track'

const Musics = () => {
  const dispatch = useDispatch()
  const musics = useSelector(state => state.genres.musics)
  useEffect(() => {
    dispatch(getMusics())
  }, [])
  console.log(musics)
  return (
    <div>
      <p>Musics</p>
      {musics.map(music => (
        <ul key={music.id} >
          <Track
            albumImage={music.albumId}
            track={music.name}
            artist={music.artistName}
          />
        </ul>
      ))}
    </div>
  );
};

export default Musics;
