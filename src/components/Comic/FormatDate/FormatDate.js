import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';
import { parseJSON } from 'date-fns';
import { Content, DisplayDates, DateSpan } from './style';

export default function FormatDate({ Data }) {
  const FormatDataApi = numbers => {
    // eslint-disable-next-line react/destructuring-assignment
    const dta = parseJSON(numbers.numbers);
    const novaData = new Date(dta);
    if (!novaData) {
      return <h1>Não disponivel</h1>;
    }
    return (
      <DateSpan>
        {format(novaData, 'dd/MM/yyyy', {
          locale: ptBR,
        })}
      </DateSpan>
    );
  };

  return (
    <>
      {Data ? (
        <Content>
          {Data.map((date, index) => (
            <>
              {date.type === 'focDate' ? (
                // eslint-disable-next-line react/no-array-index-key
                <DisplayDates key={index}>
                  <h1>Criação:</h1>
                  <FormatDataApi numbers={date.date} />
                </DisplayDates>
              ) : (
                <></>
              )}
            </>
          ))}
        </Content>
      ) : (
        <></>
      )}
    </>
  );
}
FormatDate.propTypes = {
  Data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
