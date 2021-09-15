import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';
import { parseJSON } from 'date-fns';
import Headers from '~/components/Headers';
import HeadersResponse from '~/components/Headers/HeadersResponse';
import Loading from '~/components/Layout/Loading';
import Section from '~/components/Layout/Section';
import Api from '~/services/Api';
import {
  ComicCharacters,
  ComicDescription,
  ComicImg,
  ComicInfo,
  ComicInfoDiv,
  ComicSpan,
  ComicTitle,
  Container,
  ContentDetails,
  Description,
  SpanAnswer,
  Character,
  NotContent,
} from './style';

export default function ComicsDetails() {
  const [comic, setComic] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getComic() {
      const response = await Api.get('comics', {
        params: {
          id,
        },
      });
      response.data.data.results.forEach(element => {
        setComic(element);
      });
      setLoading(false);
    }

    getComic();
  }, [id]);

  const ImgFormat = data => {
    return (
      <ComicImg
        // eslint-disable-next-line react/destructuring-assignment
        src={`${data.data.path}/portrait_uncanny.${data.data.extension}`}
        alt="imgs"
      />
    );
  };

  const PriceFormat = price => {
    // eslint-disable-next-line react/destructuring-assignment
    return <SpanAnswer>US$:{price.price[0].price}</SpanAnswer>;
  };

  const DateFormat = date => {
    // eslint-disable-next-line react/destructuring-assignment
    const dta = parseJSON(date.date[1].date);
    const novaData = new Date(dta);
    if (!novaData) {
      return <SpanAnswer>Não disponivel</SpanAnswer>;
    }
    return (
      <SpanAnswer>
        {format(novaData, 'dd/MM/yyyy', {
          locale: ptBR,
        })}
      </SpanAnswer>
    );
  };

  const ListFormat = () => {
    const novoArray = [];
    comic.characters.items.forEach(element => {
      novoArray.push(element.name);
    });
    const formatter = new Intl.ListFormat('pt-br', {
      style: 'long',
      type: 'conjunction',
    });

    return <Character>{formatter.format(novoArray)}</Character>;
  };

  return (
    <>
      <Headers />
      <HeadersResponse />
      <Section>
        {loading ? (
          <Loading />
        ) : (
          <Container>
            <ContentDetails>
              <ComicTitle>{comic.title}</ComicTitle>
              <ComicInfo>
                <ComicInfoDiv>
                  <ComicSpan>Publicado ein:</ComicSpan>
                  <DateFormat date={comic.dates} />
                </ComicInfoDiv>
                <ComicInfoDiv>
                  <ComicSpan>Editora:</ComicSpan>
                  <SpanAnswer>Marvel</SpanAnswer>
                </ComicInfoDiv>
                <ComicInfoDiv>
                  <ComicSpan>Categoria:</ComicSpan>
                  <SpanAnswer>Comics</SpanAnswer>
                </ComicInfoDiv>
                <ComicInfoDiv>
                  <ComicSpan>Gênero:</ComicSpan>
                  <SpanAnswer>Ação</SpanAnswer>
                </ComicInfoDiv>
                <ComicInfoDiv>
                  <ComicSpan>Preço :</ComicSpan>
                  <PriceFormat price={comic.prices} />
                </ComicInfoDiv>
                <ComicInfoDiv>
                  <ComicSpan>Número de Páginas:</ComicSpan>
                  <SpanAnswer>{comic.pageCount}</SpanAnswer>
                </ComicInfoDiv>
              </ComicInfo>
              {comic.description ? (
                <>
                  <ComicDescription>Descrição</ComicDescription>
                  <Description>{comic.description}</Description>
                </>
              ) : (
                <NotContent>Nenhuma descrição disponivel</NotContent>
              )}
              {comic.characters.items.length === 0 ? (
                <NotContent>Nenhum personagem disponivel</NotContent>
              ) : (
                <ComicCharacters>
                  <ComicSpan>Personagens:</ComicSpan>
                  <ListFormat />
                </ComicCharacters>
              )}
            </ContentDetails>
            <ImgFormat data={comic.thumbnail} />
          </Container>
        )}
      </Section>
    </>
  );
}
