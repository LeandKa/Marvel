import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';
import { Context } from '~/ContextStore';
import { Container, useStyleNight, useStyles } from './style';

export default function Pagina({ count, HandlePage }) {
  const light = useStyles();
  const dark = useStyleNight();
  const { value, page } = useContext(Context);

  return (
    <Container>
      <div className={value ? light.root : dark.root}>
        <Pagination
          disabled={!(count > 1)}
          onChange={HandlePage}
          defaultPage={1}
          count={count}
          page={page}
        />
      </div>
    </Container>
  );
}

Pagina.propTypes = {
  count: PropTypes.number.isRequired,
  HandlePage: PropTypes.func.isRequired,
};
