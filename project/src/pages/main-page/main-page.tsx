import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../../components/header/header';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import CatalogGenresItem from '../../components/catalog-genres-item/catalog-genres-item';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import { setCountFilms } from '../../store/action';


function MainPage(): JSX.Element {
  const [ countFilmsState, setCountFimsState ] = useState(8);
  const dispatch = useDispatch();
  const { promoFilm, films, film, isFavorite, activeGenre } = useAppSelector((state) => state);
  const navigate = useNavigate();
  let countGenreFilms = films.length;

  if (activeGenre !== 'All genres') {
    const countActiveGengeFilms = films.filter((filmItem ) => filmItem.genre === activeGenre);
    countGenreFilms = countActiveGengeFilms.length;
  }

  const setCountFilmsButton = () => {
    setCountFimsState(countFilmsState + 8);
    dispatch(setCountFilms(countFilmsState + 8));
  };

  useEffect(() => {
    dispatch(setCountFilms(8));},
  [film, dispatch]);

  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img
            src={promoFilm.backgroundImage}
            alt={promoFilm.description}
          />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header />

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img
                src={promoFilm.posterImage}
                alt={promoFilm.name}
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{promoFilm.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{promoFilm.genre}</span>
                <span className='film-card__year'>{promoFilm.released}</span>
              </p>

              <div className='film-card__buttons'>
                <button onClick={() => navigate(`/player/${promoFilm.id}`)} className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>

                <FavoriteButton id={promoFilm.id} film={film} isFavorite={isFavorite}/>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <CatalogGenresItem />
          </ul>

          <div className='catalog__films-list'>

            <SmallFilmCard catalogFilms={films} />

          </div>

          { countFilmsState < countGenreFilms ?
            <div className='catalog__more'>
              <button className='catalog__button' type='button' onClick={setCountFilmsButton}>
              Show more
              </button>
            </div>
            : null }
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
