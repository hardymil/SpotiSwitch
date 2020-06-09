import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {StyledContainer, StyledSpan, StyledForm, StyledInput} from './styles';
import Wave from 'react-wavify';
import {useTranslation} from 'react-i18next'
import '../../config/i18n'

const Signin = ({ submit }) => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    console.log(formState)
  })

  const history = useHistory()
  console.log('history', history)

  const {t, i18n} = useTranslation()

  return (
    <>
      <Wave fill='#FF4060'
          paused={false}
          options={{
            height: 100,
            amplitude: 30,
            speed: 0.15,
            points: 6,
          }}
          style={{ position: 'absolute', height: '100%'}}
      />
      <StyledContainer>
        <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)}>
        <StyledSpan>{t('Signin')}</StyledSpan>
          <StyledInput
            placeholder={t('Username')}
            type='text'
            onChange={e => setFormState({ ...formState, username: e.target.value })}
          ></StyledInput>
          <StyledInput
            placeholder={t('Password')}
            type='password'
            onChange={e => setFormState({ ...formState, password: e.target.value })}
          ></StyledInput>
          <StyledSpan>{errorMessage}</StyledSpan>
        <StyledInput type='submit'></StyledInput>
        </StyledForm>
      </StyledContainer>
    </>
  )
}
export default Signin
