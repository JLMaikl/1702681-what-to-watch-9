/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '../store';
import { FilmType } from '../types/types';
import { Review } from '../types/review';
import { loadFilms, requireAuthorization, setError, loadPromoFilm, loadReviews, addReviewAction, addRatingAction, loadSimilarFilms, loadFavoriteFilms, isFavoriteFilm } from './action';
import { saveToken, dropToken } from '../services/token';
import { AuthorizationStatus, APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { SendReview } from '../types/send-review';
import { errorHandle } from '../services/error-handle';


export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchSimilarFilmAction = createAsyncThunk(
  'data/fetchSimilarFilm',
  async (filmId: number) => {
    try {
      const { data } = await api.get<FilmType[]>(`${APIRoute.SimilarFilm}${filmId}/similar`);
      store.dispatch(loadSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      const { data } = await api.get<FilmType>(APIRoute.PromoFilm);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const { data } = await api.get<FilmType[]>(`${APIRoute.Films}`);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchRewievAction = createAsyncThunk(
  'data/fetchComments',
  async (filmId: number) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}${filmId}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'data/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'data/login',
  async ({login: email, password}: AuthData) => {
    try {
      const { data: {token} } = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'data/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addNewReviewAction = createAsyncThunk(
  'data/sendNewReview',
  async ({id, rating, comment }: SendReview) => {
    try {
      await api.post<SendReview>(`${APIRoute.Comments}${id}`, { rating, comment });
      store.dispatch(addReviewAction(comment));
      store.dispatch(addRatingAction(rating));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteAction = createAsyncThunk(
  'data/fetchFavoriteFilms',
  async () => {
    try {
      const { data } = await api.get<FilmType[]>(APIRoute.Favorite);
      console.log(data)
      store.dispatch(loadFavoriteFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
fetchFavoriteAction()
export const fetchChangeFavoriteStatusAction = createAsyncThunk(
  'data/changeFavoriteFilmStatus',
  async ({id, status}: {id: number, status: number | boolean}) => {
    try {
      await api.post<FilmType>(`${APIRoute.Favorite}/${id}/${status}`);
      store.dispatch(isFavoriteFilm(false));
    } catch (error) {
      errorHandle(error);
    }
  },
);
