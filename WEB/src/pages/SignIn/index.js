import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../../components/Login';
import { Container } from './styles';
import Background from '../../assets/img/background.jpg';

const SignIn = () => {
  if (sessionStorage.getItem('tknPizza')) {
    return <Redirect to="/Home" />;
  }
  return (
    <Container>
      <Login zIndex={2} />
      <img id="backgroundImg" src={Background} alt="Pizzaria Don Juan" />
    </Container>
  );
};

export default SignIn;
