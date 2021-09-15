import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export default function Section({ children }) {
  return <Container>{children}</Container>;
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
};
