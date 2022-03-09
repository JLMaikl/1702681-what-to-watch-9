/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { FilmType } from '../../types/types';
import PlayerCart from '../player-cart/player-cart';
import { useSelector } from 'react-redux';

type Props = {
  catalogFilms: FilmType[];
};


function SmallFilmCard({ catalogFilms }: Props): JSX.Element {
  const [filmCartInfo, setFilmCartInfo] = useState<FilmType | null>(null);
  const isActive = true;

  const filmChangeHandler = (filmInfo: FilmType) => {
    setFilmCartInfo(filmInfo);
  };

  const filmChangeHandlerOut = () => {
    setFilmCartInfo(null);
  };

  const Genre = useSelector((state: any) => state.activeGenre);

  function genreFilmFilter(catalogFilms: any): FilmType[] {

    if (Genre === 'All genres') {
      return catalogFilms;
    } else {
      return catalogFilms.filter((filmItem: FilmType ) => filmItem.genre === Genre);
    }
  }

  const catalogFilm = genreFilmFilter(catalogFilms);

  return (
    <>
      {catalogFilm.map((film: FilmType) => (
        <FilmCard
          key={film.id}
          catalogFilm={film}
          onMouseEnterCallback={filmChangeHandler}
          onMouseEnterCallbackOut={filmChangeHandlerOut}
        >
          {filmCartInfo?.id === film.id ? <PlayerCart film={film} isActive={isActive} /> : null}
        </FilmCard>))}
    </>
  );
}

export default SmallFilmCard;
