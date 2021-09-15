import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Context } from '~/ContextStore';
import { requestSearch } from '~/store/modules/Comics/action';
import {
  Container,
  Logo,
  Menu,
  MenuLink,
  Label,
  SearchInput,
  ButtonSearch,
  Icon,
  Screen,
  Light,
} from './style';

export default function Headers() {
  const { ChangeVision, value } = useContext(Context);
  const [keySearch, setKeySearch] = useState('');
  const dispatch = useDispatch();

  const OnChange = event => {
    setKeySearch(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(requestSearch(keySearch));
  };

  return (
    <Container>
      <Logo to="/">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/570a33fd-f9c5-42e4-86b2-2969ae935628/davc7e0-13fc13c6-49c2-411b-9547-7f7e34cf0377.png/v1/fill/w_1024,h_303,strp/marvel_studios_2016_transparent_logo_by_peter3422343_davc7e0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAzIiwicGF0aCI6IlwvZlwvNTcwYTMzZmQtZjljNS00MmU0LTg2YjItMjk2OWFlOTM1NjI4XC9kYXZjN2UwLTEzZmMxM2M2LTQ5YzItNDExYi05NTQ3LTdmN2UzNGNmMDM3Ny5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oiLc18MgJ6OOJdjEtKNhgSQsIdZhvsFmgTSoswru620"
          alt="marvel"
        />
      </Logo>
      <Menu>
        <li>
          <MenuLink to="/">Quadrinhos</MenuLink>
        </li>
        <li>
          <MenuLink to="/characters">Personagens</MenuLink>
        </li>
        <li>
          <MenuLink to="/">Histórias</MenuLink>
        </li>
        <li>
          <MenuLink to="/">Criadores</MenuLink>
        </li>
        <li>
          <MenuLink to="/">Podcasts</MenuLink>
        </li>
      </Menu>
      <Label onSubmit={onSubmit}>
        <SearchInput
          name="KeySearch"
          onChange={OnChange}
          placeholder="Busque o seu Quadrinho"
        />
        <ButtonSearch type="submit">
          Buscar <Icon />
        </ButtonSearch>
      </Label>
      <Screen onClick={ChangeVision} value={value}>
        <Light value={value} />
        <p>Modo Escuro</p>
      </Screen>
    </Container>
  );
}
