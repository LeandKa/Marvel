import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin: 2rem;
  position: relative;
  top: 0;
  color: inherit;
  transition: all 0.3s ease-out;
  img {
    width: auto;
    height: 300px;
  }
  h1 {
    font-size: 16px;
    text-align: center;
    font-weight: 450;
    margin-top: 1rem;
  }

  &:hover {
    top: -20px;
    cursor: pointer;
  }
  @media (max-width: 1010px) {
    width: 20%;
  }
  @media (max-width: 890px) {
    width: 25%;
  }
  @media (max-width: 630px) {
    width: 100%;
  }
`;

export const Price = styled.span`
  font-size: 12px;
`;
