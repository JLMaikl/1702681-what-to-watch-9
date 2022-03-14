import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import AddReview from '../../pages/add-review/add-review';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { FilmType } from '../../types/types';

import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';

type Props = {
  catalogFilms: FilmType[];
};


function App({catalogFilms} : Props): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if(!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const [film] = catalogFilms;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage catalogFilms={catalogFilms}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyList catalogFilms={catalogFilms}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Films}
          element={<MoviePage catalogFilms={catalogFilms}/>}
        />
        <Route
          path={AppRoute.Filmsreview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player film={film}/>}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
