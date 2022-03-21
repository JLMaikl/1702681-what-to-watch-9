/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/errorMessage';
import { store } from './store';
import { fetchFilmsAction, fetchPromoFilmAction, checkAuthAction, fetchRewievAction} from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromoFilmAction());
// store.dispatch(fetchRewievAction(store.getState().film.id));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
