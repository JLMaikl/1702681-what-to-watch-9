import { createReducer } from '@reduxjs/toolkit';
import { checkGenre, loadFilms, requireAuthorization, setError } from './action';
import { AuthorizationStatus } from '../const';
import { FilmType } from '../types/types';

type InitialState = {
  activeGenre: string,
  films: FilmType[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string,
}
const initialState: InitialState = {
  activeGenre: '',
  films: [],
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
