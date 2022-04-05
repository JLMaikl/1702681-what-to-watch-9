import Logo from '../../components/logo/logo';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import FilmCardInfo from '../../components/movie-page-components/film-card-info/film-card-info';
import FilmNavList from '../../components/movie-page-components/film-nav-list/film-nav-list';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute } from '../../const';
import { fetchRewievAction, fetchSimilarFilmAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';
import FavoriteButton from '../../components/favorite-button/favorite-button';

function MoviePage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchRewievAction(+id));
      dispatch(fetchSimilarFilmAction(+id));
    }
  }, [dispatch, id]);

  const { film, reviews, authorizationStatus, similarFilms, isFavorite } = useAppSelector((state) => state);

  return (
    <>
      <section className='film-card film-card--full' >
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film.backgroundImage} alt={film.description} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <header className='page-header film-card__head'>
            <Logo />
            <UserBlock />
          </header>

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{film.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{film.genre}</span>
                <span className='film-card__year'>{film.released}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <Link to={`${AppRoute.PlayerId}${film.id}`} style={{ textDecoration: 'none', color: '#EEE5B5' }}>
                    <svg viewBox='0 0 19 19' width='19' height='19'>
                      <use xlinkHref='#play-s'></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                </button>

                <FavoriteButton id={film.id} film={film} isFavorite={isFavorite}/>

                {authorizationStatus === AuthorizationStatus.Auth ?
                  <Link to={`${AppRoute.Film}${film.id}/review`} className='btn film-card__button'>Add review</Link>
                  : <Link to={AppRoute.Login} className='btn film-card__button'>Add review</Link>}
              </div>

            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={film.posterImage} alt={film.description} width='218' height='327' />
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <FilmNavList />
              </nav>

              <FilmCardInfo film={film} reviews={reviews} />

            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <div className='catalog__films-list'>
            <SmallFilmCard catalogFilms={similarFilms} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
