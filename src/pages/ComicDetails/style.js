import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  align-self: center;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 1125px) {
    flex-direction: column;
  }
  @media (max-width: 668px) {
    width: auto;
    margin: 2rem;
  }
`;

export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 26px;
  text-align: center;
  margin: 2rem;
`;

export const ComicTitle = styled.h1`
  font-size: 1.6rem;
`;

export const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 120px;
  gap: 0.2rem;
  margin-top: 3rem;
  @media (max-width: 668px) {
    height: 100%;
    gap: 0;
  }
`;

export const ComicInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ComicSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const SpanAnswer = styled.h1`
  font-size: 18px;
  font-weight: 200;
`;

export const ComicImg = styled.img`
  width: auto;
  height: 591px;
`;

export const ComicDescription = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem;
`;

export const Description = styled.p`
  line-height: 2rem;
  font-size: 1vw;
  font-weight: 200;
`;

export const ComicCharacters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  margin-top: 3rem;
`;

export const Character = styled.p`
  color: inherit;
  flex: 2;
  flex-wrap: wrap;
  font-weight: 400;
  margin-left: 0.4rem;
  margin-top: 2px;
  font-size: 15px;
`;

export const NotContent = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
`;
