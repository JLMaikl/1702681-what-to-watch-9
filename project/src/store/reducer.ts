import { createReducer } from '@reduxjs/toolkit';
import { checkGenre, loadFilms, requireAuthorization, setError, loadPromoFilm } from './action';
import { AuthorizationStatus, PROMO_FILM } from '../const';
import { FilmType } from '../types/types';

type InitialState = {
  activeGenre: string,
  films: FilmType[],
  promoFilm: FilmType,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string,
}
const initialState: InitialState = {
  activeGenre: 'All genres',
  films: [],
  promoFilm: PROMO_FILM,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkGenre, (state, action) => {
      state.activeGenre = action.payload ;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
