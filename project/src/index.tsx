import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const appPage = {
  filmCardTitle: 'The Grand Budapest Hotel',
  filmCardGenre: 'Drama',
  filmCardYear: 2014,
};

ReactDOM.render(
  <React.StrictMode>

    <App
      filmCardTitle={appPage.filmCardTitle}
      filmCardGenre={appPage.filmCardGenre}
      filmCardYear={appPage.filmCardYear}
    />

  </React.StrictMode>,
  document.getElementById('root'));
