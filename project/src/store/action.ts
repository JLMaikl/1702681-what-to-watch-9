import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/types';
import { AuthorizationStatus } from '../const';


// export const checkGenre = createAction(
//   ActionType.CheckGenre,
//   (activeGenre: string) => ({
//     payload: activeGenre,
//   }),
// );

export const checkGenre = createAction<any>('data/activeGenre');

export const loadFilms = createAction<FilmType[]>('data/loadQuestions');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('game/setError');


