import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import AddReview from '../../pages/add-review/add-review';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';


type MainPageProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
}


function App({ filmCardTitle, filmCardGenre, filmCardYear }: MainPageProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage
            filmCardTitle={filmCardTitle}
            filmCardGenre={filmCardGenre}
            filmCardYear={filmCardYear}
          />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Films}
          element={<MoviePage
            filmCardTitle={filmCardTitle}
            filmCardGenre={filmCardGenre}
            filmCardYear={filmCardYear}
          />}
        />
        <Route
          path={AppRoute.Filmsreview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
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
