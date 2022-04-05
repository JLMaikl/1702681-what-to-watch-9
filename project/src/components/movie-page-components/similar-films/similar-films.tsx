import { useState } from 'react';
import { FilmType } from '../../../types/types';
import { useAppSelector } from '../../../hooks';
import PlayerCart from '../../../components/player-cart/player-cart';
import SimilarFilmCard from './similar-film-card.tsx/similar-film-card';

function SimilarFilms(): JSX.Element {
  const { similarFilms } = useAppSelector((state) => state);
  const [filmCartInfo, setFilmCartInfo] = useState<FilmType | null>(null);


  const filmChangeHandler = (filmInfo: FilmType) => {
    setFilmCartInfo(filmInfo);
  };

  const filmChangeHandlerOut = () => {
    setFilmCartInfo(null);
  };


  return (
    <>
      {similarFilms.map((film) => (
        <SimilarFilmCard
          key={film.id}
          catalogFilm={film}
          onMouseEnterCallback={filmChangeHandler}
          onMouseEnterCallbackOut={filmChangeHandlerOut}
        >
          {filmCartInfo?.id === film.id && <PlayerCart film={film} isActive /> }
        </SimilarFilmCard>))}
    </>
  );
}

export default SimilarFilms;
