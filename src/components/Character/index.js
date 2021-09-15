import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export default function Character({ Id, Img, Extension, Title }) {
  return (
    <Container id={Id}>
      <img src={`${Img}/portrait_uncanny.${Extension}`} alt="imgs" />
      <h1>{Title}</h1>
    </Container>
  );
}

Character.propTypes = {
  Img: PropTypes.string.isRequired,
  Extension: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired,
};
