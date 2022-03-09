import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { catalogFilms } from './mocs/films';
import { store } from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App catalogFilms={catalogFilms} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
