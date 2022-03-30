/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { fetchChangeFavoriteStatusAction, fetchFavoriteAction } from '../../store/api-actions';
import { FilmType } from '../../types/types';
import { useAppDispatch } from '../../hooks';

type FavoriteFilmsProps = {
  id: number;
  isFavorite: boolean;
  film: FilmType;
}

function FavoriteButton({ id, isFavorite, film }: FavoriteFilmsProps) {

  // const [isFavoritStatus, setIsFavoritStatus] = useState<boolean | number>(false);
  const [isFavoritState, setIsFavoritState] = useState<boolean | number>(false);
  let isFavoriteStatusNumber = 0;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteAction());
    setIsFavoritState(film.isFavorite);},
  [dispatch, film.isFavorite, film]);

  const favoriteButtonClick = () => {
    setIsFavoritState((prevIsFavoritState) => !prevIsFavoritState);
    isFavoriteStatusNumber = isFavoritState ? 0 : 1;
    dispatch(fetchChangeFavoriteStatusAction({id, status: isFavoriteStatusNumber}));
  };


  return (
    <button onClick={favoriteButtonClick} className='btn btn--list film-card__button' type='button'>
      <svg viewBox='0 0 19 20' width='19' height='20'>
        <use xlinkHref={isFavoritState ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default FavoriteButton;


