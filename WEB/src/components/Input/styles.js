import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  font-family: Helvetica;
  font-size: 15px;
  text-align: left;
  color: #999999;
  letter-spacing: 0;
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #f00' : 0)};
  height: 45px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  ::-webkit-input-placeholder {
    color: #999999;
  }
  ::-moz-placeholder {
    color: #999999;
  }
  :-ms-input-placeholder {
    color: #999999;
  }
  :-moz-placeholder {
    color: #999999;
  }
`;
