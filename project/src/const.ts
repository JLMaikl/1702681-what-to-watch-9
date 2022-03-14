export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Films = '/films/:id',
  Filmsreview = '/films/:id/review',
  Player = '/player/:id'
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/:id',
  SimilarFilm = '/films/:id/similar',
  PromoFilm = '/promo',
  Favorite = '/favorite',
  FavoriteStatus= '/favorite/:id/status',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}


export const catalogGenresItems = [
  {
    genre: 'All genres',
    active: 'catalog__genres-item--active',
  },
  {
    genre: 'Comedies',
    active: '',
  },
  {
    genre: 'Crime',
    active: '',
  },
  {
    genre: 'Documentary',
    active: '',
  },
  {
    genre: 'Dramas',
    active: '',
  },
  {
    genre: 'Horror',
    active: '',
  },
  {
    genre: 'Kids & Family',
    active: '',
  },
  {
    genre: 'Romance',
    active: '',
  },
  {
    genre: 'Sci-Fi',
    active: '',
  },
  {
    genre: 'Thrillers',
    active: '',
  }];



