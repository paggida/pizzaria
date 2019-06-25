import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './styles';
import 'font-awesome/css/font-awesome.css';

const InputText = ({
  type, placeholder, value, onChange,
}) => (
  <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
);

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
};

export default InputText;
