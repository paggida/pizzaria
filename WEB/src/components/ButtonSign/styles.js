import styled from 'styled-components';
import { colors } from '../../styles';

export const Button = styled.button`
  display: block;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  letter-spacing: 0;
  border-radius: 5px;
  height: 45px;
  width: 100%;
  max-width: 340px;
  margin-top: 15px;
  background: ${colors.secondary};
  &:hover {
    background: ${colors.tertiary};
    cursor: pointer;
  }
`;
