import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Context } from '~/ContextStore';

const LightMode = {
  colors: {
    background: '#FFF',
    text: '#353537',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1.0rem',
    medium: '2.0rem',
    large: '3.0rem',
  },
};

const DarkMode = {
  colors: {
    background: '#282830',
    text: '#FAFAFA',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1.0rem',
    medium: '2.0rem',
    large: '3.0rem',
  },
};

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font-weight: bold;
    transition: all 0.3s ease-out;
    color:${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;

export default function Theme({ children }) {
  const { value } = useContext(Context);

  return (
    <ThemeProvider theme={value ? LightMode : DarkMode}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
Theme.propTypes = {
  children: PropTypes.element.isRequired,
};
