import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DisplayDates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1 {
    font-size: 16px;
    text-transform: capitalize;
  }
`;

export const DateSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-top: 14px;
`;
