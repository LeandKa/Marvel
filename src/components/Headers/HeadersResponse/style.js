import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  padding: 1rem;
  z-index: 1;
  flex-direction: row;
  background: #1e1e26;
  justify-content: space-between;
  @media (max-width: 1050px) {
    display: flex;
    padding: 0.4rem;
  }
`;

export const MenuButton = styled.h1`
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-top: 1.5rem;
  @media (max-width: 400px) {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 71px;
  width: 100%;
  z-index: 1;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  background: #1e1e26;
`;

export const MenuList = styled.ul`
  list-style: none;
  li {
    color: white;
    font-weight: 500;
    line-height: 22px;
    padding: 20px 12px;
    font-size: 25px;
    border-bottom: 1px solid #282830;
    margin: 1rem;
  }
`;
export const MenuLink = styled(Link)`
  color: white;
  &:hover {
    color: rgba(242, 38, 19, 1);
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-top: 1.5rem;
`;

export const SearchContainer = styled.form`
  position: fixed;
  top: 0;
  width: 100%;
  display: ${props => (props.open ? 'flex' : 'none')};
  background: #1e1e26;
  z-index: 1;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;
export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 25px;
  padding: 1.3rem;
  width: 90%;
  border: 1px solid white;
`;

export const SearchInput = styled.input`
  background: none;
  border-radius: 25px;
  padding: 1.3rem;
  width: 90%;
  border: 1px solid white;
  color: #b4b4b4;
  margin: 2rem;
  font-size: 16px;
  margin-left: 10px;
  line-height: 10px;
`;

export const SearchOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4rem;
  padding: 1rem;
  button {
    color: #707070;
    background: none;
    border: none;
    font-size: 30px;
    font-weight: 500;
  }
`;
