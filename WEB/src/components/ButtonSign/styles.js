import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  font-family: Helvetica;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  letter-spacing: 0;
  border-radius: 5px;
  height: 45px;
  width: 100%;
  max-width: 340px;
  margin-top: 15px;
  background: #e3293b;
  &:hover {
    background: #e84a5a;
    cursor: pointer;
  }
`;
