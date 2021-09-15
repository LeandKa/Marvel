import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext({
  nightVision: false,
});

export default function ContextStore({ children }) {
  const [nightState, setNightState] = useState(true);
  const [page, setPage] = useState(1);

  const ChangeVision = () => {
    setNightState(!nightState);
  };

  const ChangePage = value => {
    setPage(value);
  };

  const value = useMemo(() => ({ nightState, page, ChangePage }), [
    nightState,
    page,
  ]);

  return (
    <Context.Provider
      value={{ value: value.nightState, page, ChangePage, ChangeVision }}
    >
      {children}
    </Context.Provider>
  );
}

ContextStore.propTypes = {
  children: PropTypes.element.isRequired,
};
