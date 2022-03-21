import { createReducer } from '@reduxjs/toolkit';
import { checkGenre, loadFilms, requireAuthorization, setError, loadPromoFilm, checkActiveItem, loadReviews, checkFilm } from './action';
import { AuthorizationStatus, PROMO_FILM } from '../const';
import { FilmType } from '../types/types';
import { Review } from '../types/review';

type InitialState = {
  activeGenre: string,
  films: FilmType[],
  film: FilmType,
  promoFilm: FilmType,
  review: Review[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string,
  activeItem: string,
}
const initialState: InitialState = {
  activeGenre: 'All genres',
  films: [],
  film: PROMO_FILM,
  promoFilm: PROMO_FILM,
  review: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
  activeItem: 'Overview',
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
    .addCase(loadReviews, (state, action) => {
      state.review = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(checkFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(checkActiveItem, (state, action) => {
      state.activeItem = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
