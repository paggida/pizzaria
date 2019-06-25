import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../../components/Login';
import { Container } from './styles';

const SignIn = () => {
  if (sessionStorage.getItem('tknPizza')) {
    return <Redirect to="/Home" />;
  }
  return (
    <Container>
      <Login zIndex={2} />
    </Container>
  );
};

export default SignIn;
