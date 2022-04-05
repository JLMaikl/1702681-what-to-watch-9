export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Films = '/films/:id',
  Film = '/films/',
  Filmsreview = '/films/:id/review',
  Player = '/player/:id',
  PlayerId = '/player/',
  MoviePageReviews = '/films/:id/rewies',
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
  SimilarFilm = '/films/',
  PromoFilm = '/promo',
  Favorite = '/favorite',
  FavoriteStatus= '/favorite/:id/status',
  Comments = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export const filmNavLinks = [
  {
    id: 1,
    link: 'Overview',
    active: 'film-nav__item--active',
  },
  {
    id: 2,
    link: 'Details',
    active: '',
  },
  {
    id: 3,
    link: 'Reviews',
    active: '',
  },
];


export const catalogGenresItems = [
  {
    genre: 'All genres',
    active: 'catalog__genres-item--active',
  },
  {
    genre: 'Comedy',
    active: '',
  },
  {
    genre: 'Crime',
    active: '',
  },
  {
    genre: 'Adventure',
    active: '',
  },
  {
    genre: 'Action',
    active: '',
  },
  {
    genre: 'Thriller',
    active: '',
  },
  {
    genre: 'Drama',
    active: '',
  },
  {
    genre: 'Fantasy',
    active: '',
  }];

export const RATING_VALUES = [
  {
    value: 10,
  },
  {
    value: 9,
  },
  {
    value: 8,
  },
  {
    value: 7,
  },
  {
    value: 6,
  },
  {
    value: 5,
  },
  {
    value: 4,
  },
  {
    value: 3,
  },
  {
    value: 2,
  },
  {
    value: 1,
  },
];

export const PROMO_FILM = {
  name: 'War of the Worlds',
  posterImage: 'https://9.react.pages.academy/static/film/poster/War_of_the_Worlds.jpg',
  previewImage: 'https://9.react.pages.academy/static/film/preview/war-of-the-worlds.jpg',
  backgroundImage: 'https://9.react.pages.academy/static/film/background/War_of_the_Worlds.jpg',
  backgroundColo: '#9B7E61',
  description: 'As Earth is invaded by alien tripod fighting machines, one family fights for survival.',
  rating: 9.3,
  scoresCount: 386834,
  director: 'Steven Spielberg',
  starring: ['Tom Cruise','Dakota Fanning','Tim Robbins'],
  runTime: 116,
  genre: 'Adventure',
  released: 2005,
  id: 1,
  isFavorite: false,
  videoLink: 'https://9.react.pages.academy/static/film/video/matrix.mp4',
  previewVideoLink: 'https://9.react.pages.academy/static/film/video/dog.mp4',
};

export const SCORE_FILM = {
  Bad: 'Bad',
  Normal: 'Normal',
  Good: 'Good',
  VeryGood: 'Very good',
  Awesome: 'Awesome',
};


