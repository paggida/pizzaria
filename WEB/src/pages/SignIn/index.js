import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../../components/Login';
import { Container } from './styles';

const SignIn = () => (sessionStorage.getItem('tknPizza') ? (
  <Redirect to="/Home" />
) : (
  <Container>
    <Login zIndex={2} />
  </Container>
));

export default SignIn;
