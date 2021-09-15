import React from 'react';
import PropTypes from 'prop-types';
import { Content, PriceSpan } from './style';

export default function Price({ Preco }) {
  return (
    <div>
      {Preco ? (
        Preco.map((data, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Content key={index}>
            <h1>Preço:</h1>
            <PriceSpan>US${data.price}</PriceSpan>
          </Content>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

Price.propTypes = {
  Preco: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
