import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #0b2030;
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
    }
    h1 {
      margin-left: 14px;
      font-weight: bold;
      font-size: 18px;
      color: #ffffff;
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
  border-right: 1px solid #b3b3b3;
  align-items: flex-end;
  width: 170px;
  strong {
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    text-align: left;
  }
  button {
    background: transparent;
    font-size: 14px;
    color: ${props => (props.logOut ? '#e3293b' : '#b3b3b3')};
    cursor: pointer;
  }
`;

export const AdminAction = styled.div`
  display: flex;
  button {
    color: #ffffff;
    border-radius: 100px;
    background-color: #e3293b;
    cursor: pointer;
    width: 37px;
    height: 37px;
  }
`;
