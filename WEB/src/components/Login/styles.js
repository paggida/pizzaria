import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  max-width: 340px;
  z-index: ${props => props.zIndex};
  img {
    display: block;
    width: 72px;
    height: 72px;
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;
  }
`;
