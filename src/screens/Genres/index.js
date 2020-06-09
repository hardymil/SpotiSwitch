import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGenres, delateGenres} from '../../actions/genres';
import {Link} from 'react-router-dom';
import { StyledDiv, StyledButton, StyledTitle, StyledLink, StyledDeconnect } from './styles';
import { ReactComponent as Disconnect } from '../../assets/img/turn-off.svg';
import addNotification from 'react-push-notification';
import '../../config/i18n'
import {useTranslation} from 'react-i18next'

const buttonClick = () => {
  addNotification({
      title: 'SpotiSwitch',
      subtitle: 'Félicitaion !',
      message: 'Parmi tous les genres musicaux que vous avez sélectionnés, vous ne découvriez aucune musique de ces genres. Prendre plaisir !',
      theme: 'darkblue',
      native: true
  });
};

const Genres = props => {
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genres.genres)
  console.log(genres);
  console.log('Genre -> props', props)
  useEffect(() => {
    dispatch(getGenres())
  }, [])

  const redirectToLogin = () => {
    localStorage.removeItem('token')
    props.history.push('/login')
  }

  const {t,i18n} = useTranslation()
  return (
    <div>
      <StyledDeconnect onClick={() => redirectToLogin()}><Disconnect/></StyledDeconnect>
      <StyledTitle>
      <div>
          <h1>{t('choose')}</h1>
      </div>
      </StyledTitle>
      <StyledDiv>
        {genres.map(genre => (
          <StyledButton 
            key={genre.id} 
            onClick={() => dispatch(delateGenres(genre))}
          >
            {genre.name}
          </StyledButton>
        ))}
      </StyledDiv>
      <StyledLink onClick={buttonClick}>
        <Link to='/musics'>{t('next')}</Link>
      </StyledLink>
    </div>
  );
};

export default Genres;