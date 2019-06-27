import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  min-width: max-content;
  background-color: ${colors.primary};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 50%;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      margin-left: 20px;
    }
    h1 {
      margin-left: 14px;
      font-weight: bold;
      font-size: 18px;
      color: ${colors.white};
      letter-spacing: 0;
      text-align: left;
    }
  }
`;

export const Admin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 50%;
  .adminContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const AdminData = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid ${colors.regular};
  align-items: flex-end;
  width: 170px;
  strong {
    font-weight: bold;
    font-size: 16px;
    color: ${colors.white};
    text-align: left;
  }
  button {
    background: transparent;
    font-size: 14px;
    color: ${props => (props.logOut ? colors.warning : colors.regular)};
    cursor: pointer;
  }
`;

export const AdminAction = styled.div`
  display: flex;
  button {
    color: ${colors.white};
    border-radius: 100px;
    background-color: ${colors.secondary};
    cursor: pointer;
    width: 37px;
    height: 37px;
  }
`;
