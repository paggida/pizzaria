import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 25%;
  margin-right: 25%;
  flex-direction: column;
  min-width: 315px;
`;

export const Thead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  h2 {
    font-weight: bold;
    font-size: 19px;
    text-align: left;
  }
  button {
    background: ${colors.transparent};
    cursor: pointer;
  }
`;
export const Tbody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: ${colors.light} 4px 4px 12px 1px;
  padding: 20px;
  img {
    margin-bottom: 20px;
  }
  p {
    font-weight: bold;
    font-size: 19px;
    color: ${colors.darker};
  }
`;
