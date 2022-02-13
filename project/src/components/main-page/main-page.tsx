import Header from '../header/header';
import SmallFilmCard from '../small-film-card/small-film-card';
import CatalogGenresItem from '../catalog-genres-item/catalog-genres-item';
import Footer from '../footer/footer';


type MainPageProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
}


function MainPage({filmCardTitle, filmCardGenre, filmCardYear}: MainPageProps): JSX.Element {
  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img
            src='img/bg-the-grand-budapest-hotel.jpg'
            alt='The Grand Budapest Hotel'
          />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header />

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img
                src='img/the-grand-budapest-hotel-poster.jpg'
                alt='The Grand Budapest Hotel poster'
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{filmCardTitle}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{filmCardGenre}</span>
                <span className='film-card__year'>{filmCardYear}</span>
              </p>

              <div className='film-card__buttons'>
                <button
                  className='btn btn--play film-card__button'
                  type='button'
                >
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className='btn btn--list film-card__button'
                  type='button'
                >
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                </button>
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

            <SmallFilmCard />

          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>
              Show more
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;