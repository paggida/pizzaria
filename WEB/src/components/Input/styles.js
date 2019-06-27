import styled from 'styled-components';
import { colors } from '../../styles';

export const Input = styled.input`
  display: block;
  font-size: 15px;
  text-align: left;
  color: ${colors.regular};
  letter-spacing: 0;
  border-radius: 5px;
  height: 45px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  ::-webkit-input-placeholder {
    color: ${colors.regular};
  }
  ::-moz-placeholder {
    color: ${colors.regular};
  }
  :-ms-input-placeholder {
    color: ${colors.regular};
  }
  :-moz-placeholder {
    color: ${colors.regular};
  }
`;
