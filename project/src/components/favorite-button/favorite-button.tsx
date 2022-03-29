/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { fetchChangeFavoriteStatusAction } from '../../store/api-actions';
import { store } from '../../store';
import { FilmType } from '../../types/types';

type FavoriteFilmsProps = {
  id: number;
  isFavorite: boolean;
  film: FilmType;
}

function FavoriteFilms({ id, isFavorite, film }: FavoriteFilmsProps) {

  const [isFavoritStatus, setIsFavoritStatus] = useState<boolean | number>(isFavorite);
  let isFavoriteStatusNumber = 0;

  const favoriteButtonClick = () => {
    isFavoriteStatusNumber = isFavoritStatus ? 0 : 1;
    setIsFavoritStatus(!!isFavoriteStatusNumber);
    store.dispatch(fetchChangeFavoriteStatusAction({id, status: isFavoriteStatusNumber}));
  };


  return (
    <button onClick={favoriteButtonClick} className='btn btn--list film-card__button' type='button'>
      <svg viewBox='0 0 19 20' width='19' height='20'>
        <use xlinkHref={isFavoritStatus ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default FavoriteFilms;


