import React, { useContext } from 'react';
import { Container, CustomLoading } from './style';
import { Context } from '~/ContextStore';

export default function Loading() {
  const { value } = useContext(Context);

  return (
    <Container>
      <h1>Carregando ...</h1>
      <CustomLoading type="spin" color={value ? 'black' : 'white'} />
    </Container>
  );
}
