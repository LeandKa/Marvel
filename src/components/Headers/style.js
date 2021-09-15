import styled from 'styled-components';
import { FaSearch, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  padding: 1rem;
  flex-direction: row;
  background: #1e1e26;
  justify-content: space-between;
  @media (max-width: 1050px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  margin-left: 1rem;

  img {
    margin-right: 1rem;
    width: 120px;
    height: 70px;
  }
  @media (max-width: 1010px) {
    img {
      height: 60px;
      margin-right: 0;
    }
  }
  @media (max-width: 400px) {
    img {
      margin-right: 0;
      width: 90px;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-top: 1.6rem;
  @media (max-width: 1010px) {
    display: none;
  }
`;

export const MenuLink = styled(Link)`
  margin-left: 1.3rem;
  color: white;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: rgba(242, 38, 19, 1);
  }
`;

export const Label = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 2rem;
  margin-top: 1.2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border: 1px solid white;
  border-radius: 25px;
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  color: #b4b4b4;
  font-size: 13px;
  margin-left: 10px;
  line-height: 10px;
`;

export const ButtonSearch = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 0.4rem;
  width: 100px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  background: rgba(242, 38, 19, 1);
`;

export const Icon = styled(FaSearch)`
  color: white;
  margin-left: 0.4rem;
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-top: 1.5rem;
  p {
    color: ${({ value }) => (value ? '#b4b4b4' : 'rgba(242, 38, 19, 1)')};
  }
  @media (max-width: 400px) {
    p {
      font-size: 12px;
    }
  }
`;

export const Light = styled(FaLightbulb)`
  color: ${({ value }) => (value ? '#b4b4b4' : 'rgba(242, 38, 19, 1)')};
  margin-right: 10px;
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
