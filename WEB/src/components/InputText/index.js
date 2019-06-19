import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './styles';
import 'font-awesome/css/font-awesome.css';

const InputText = ({
  placeholder, value, error, onChange,
}) => (
  <Input type="text" placeholder={placeholder} value={value} onChange={onChange} error={error} />
);

InputText.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

InputText.defaultProps = {
  value: '',
  placeholder: '',
  error: false,
  onChange: () => {},
};

export default InputText;
