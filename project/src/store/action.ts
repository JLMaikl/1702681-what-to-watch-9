import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/types';
import { AuthorizationStatus } from '../const';
import { Review } from '../types/review';


export const checkGenre = createAction<string>('data/activeGenre');

export const setCountFilms = createAction<number>('data/countFilms');

export const loadFilms = createAction<FilmType[]>('data/loadFilms');

export const loadSimilarFilms = createAction<FilmType[]>('data/loadSimilarFilms');

export const loadFavoriteFilms = createAction<FilmType[]>('data/loadFavoriteFilms');

export const isFavoriteFilm = createAction<boolean>('data/isFavoriteFilm');

export const loadReviews = createAction<Review[]>('data/loadReview');

export const addReviewAction = createAction<string>('data/addReview');

export const addRatingAction = createAction<number>('data/addRating');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('game/setError');

export const loadPromoFilm = createAction<FilmType>('data/promoFilm');

export const checkActiveItem = createAction<string>('data/activeItem');

export const checkFilm = createAction<FilmType>('data/activeFilm');
