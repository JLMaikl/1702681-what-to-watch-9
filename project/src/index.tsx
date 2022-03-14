import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { catalogFilms } from './mocs/films';
import ErrorMessage from './components/error-message/errorMessage';
import { store } from './store';
import { fetchFilmsAction, checkAuthAction, fetchPromoFilmAction
} from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromoFilmAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App catalogFilms={catalogFilms} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
