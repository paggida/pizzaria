import styled from 'styled-components';
import { colors } from '../../styles';
import Background from '../../assets/img/background.jpg';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, ${colors.transparent} 0%, ${colors.black} 97%),
    url(${Background});
  background-size: 100% 100%;
`;
