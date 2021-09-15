import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding: 2rem;
`;

export const useStyles = makeStyles({
  root: {
    '& .Mui-selected': {
      backgroundColor: 'red',
    },
    '&.MuiPaginationItem-ellipsis': {
      color: 'black',
    },
    '& .MuiPagination-ul': {
      '& > li': {
        '& button': {
          border: '1px solid black',
          color: 'black',
        },
      },
    },
  },
});

export const useStyleNight = makeStyles({
  root: {
    '& .Mui-selected': {
      backgroundColor: 'red',
    },
    '&.MuiPaginationItem-ellipsis': {
      color: 'white',
    },
    '& .MuiPagination-ul': {
      '& > li': {
        '& button': {
          border: '1px solid white',
          color: 'white',
        },
      },
    },
  },
});
