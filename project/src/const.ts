export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Films = '/films/:id',
  Filmsreview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Genres {
  AllGenres = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'KidsAndFamily',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thrillers = 'Thrillers',
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

