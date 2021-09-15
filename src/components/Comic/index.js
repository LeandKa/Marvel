import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import FormatDate from './FormatDate/FormatDate';
import { Container } from './style';

export default function Comic({
  Img,
  Extension,
  Title,
  Id,
  DataOnSale,
  Preco,
}) {
  return (
    <Container
      to={{
        pathname: `/comic/${Id}`,
        query: { Title },
      }}
    >
      <img src={`${Img}/portrait_uncanny.${Extension}`} alt="imgs" />
      <h1>{Title}</h1>
      <FormatDate Data={DataOnSale} />
      <Price Preco={Preco} />
    </Container>
  );
}

Comic.propTypes = {
  Img: PropTypes.string.isRequired,
  DataOnSale: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  Preco: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  Extension: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired,
};
