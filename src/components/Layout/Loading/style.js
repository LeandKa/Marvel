import Loading from 'react-loading';
import styled, { keyframes } from 'styled-components';

const blinking = keyframes`
 0% { opacity:1;}
 30% {  opacity: 0.8; }
 40% {  opacity: 0.5; }
 100% {  opacity: 0.2; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itens: center;
  margin-top: 7rem;
  h1 {
    margin-top: 1rem;
    margin-right: 1rem;
    animation-name: ${blinking};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;

export const CustomLoading = styled(Loading)`
  width: 30%;
  height: 20%;
  margin-bottom: 1rem;
`;
