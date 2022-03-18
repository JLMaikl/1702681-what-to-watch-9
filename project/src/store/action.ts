import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/types';
import { AuthorizationStatus } from '../const';


export const checkGenre = createAction<string>('data/activeGenre');

export const loadFilms = createAction<FilmType[]>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('game/setError');

export const loadPromoFilm = createAction<FilmType>('data/promoFilm');

export const checkActiveItem = createAction<string>('data/activeItem');
