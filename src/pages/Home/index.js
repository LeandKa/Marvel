import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comic from '~/components/Comic';
import { Context } from '~/ContextStore';
import HeadersResponse from '~/components/Headers/HeadersResponse';
import Loading from '~/components/Layout/Loading';
import Section from '~/components/Layout/Section';
import Pagina from '~/components/Pagina';
import {
  requestComics,
  requestPagination,
} from '~/store/modules/Comics/action';
import Headers from '../../components/Headers';
import { Content, Title } from './style';

export default function Home() {
  const { comics, loading, count, keySearch } = useSelector(
    state => state.comics
  );
  const { ChangePage } = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestComics());
    ChangePage(1);
  }, [dispatch]);

  const HandlePage = (event, valor) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    ChangePage(valor);
    dispatch(requestPagination(valor));
  };

  return (
    <>
      <Headers />
      <HeadersResponse />
      <Section>
        <Title>
          {keySearch ? `Resultado para a busca de ${keySearch}` : 'Quadrinhos'}
        </Title>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Content>
              {comics.map(data => (
                <Comic
                  key={data.id}
                  Id={data.id}
                  Preco={data.prices}
                  DataOnSale={data.dates}
                  Img={data.thumbnail.path}
                  Title={data.title}
                  Extension={data.thumbnail.extension}
                />
              ))}
            </Content>
            <Pagina HandlePage={HandlePage} count={count} />
          </>
        )}
      </Section>
    </>
  );
}
