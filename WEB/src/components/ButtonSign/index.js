import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';
import 'font-awesome/css/font-awesome.css';

const SignIn = ({
  type, loading, value, onClick,
}) => (
  <Button type={type} onClick={onClick}>
    {loading ? <i className="fa fa-spinner fa-pulse" /> : value}
  </Button>
);

SignIn.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

SignIn.defaultProps = {
  loading: false,
};

export default SignIn;
