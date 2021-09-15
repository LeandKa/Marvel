import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import Character from '~/components/Character';
import Headers from '~/components/Headers';
import { Context } from '~/ContextStore';
import HeadersResponse from '~/components/Headers/HeadersResponse';
import Loading from '~/components/Layout/Loading';
import Section from '~/components/Layout/Section';
import Pagina from '~/components/Pagina';
import Api from '~/services/Api';
import { Title, Content } from './style';

export default function Characters() {
  const [comics, setComics] = useState({});
  const [loading, setLoading] = useState(true);
  const { ChangePage } = useContext(Context);

  useEffect(() => {
    async function GetCharacters() {
      try {
        const response = await Api.get('/characters', {
          params: {
            orderBy: 'name',
            limit: 12,
          },
        });
        setComics(response.data.data);
        setLoading(false);
      } catch (error) {
        toast.error('Erro na solicitação', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    ChangePage(1);
    GetCharacters();
  }, []);

  const HandlePage = (event, valor) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    ChangePage(valor);
    async function GetPage() {
      try {
        setLoading(true);
        const response = await Api.get('/characters', {
          params: {
            orderBy: 'name',
            limit: 12,
            offset: 12 * valor - 12,
          },
        });
        setComics(response.data.data);
        setLoading(false);
      } catch (error) {
        toast.error('Erro na solicitação', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    GetPage();
  };

  return (
    <>
      <Headers />
      <HeadersResponse />
      <Section>
        <Title>Personagens</Title>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Content>
              {comics.results.map(data => (
                <Character
                  key={data.id}
                  Id={data.id}
                  Img={data.thumbnail.path}
                  Title={data.name}
                  Extension={data.thumbnail.extension}
                />
              ))}
            </Content>
            <Pagina
              count={Math.ceil(comics.total / comics.limit)}
              HandlePage={HandlePage}
            />
          </>
        )}
      </Section>
    </>
  );
}
