import React from 'react'

const Home = props => {
  console.log('Home -> props', props)

  const redirectToLogin = () => {
    localStorage.removeItem('token')
    props.history.push('/login')
  }
  return (
    <div>
      <p>home</p>
      <button onClick={() => redirectToLogin()}>Deconnexion</button>
    </div>
  )
}

export default Home
