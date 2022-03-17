import FilmNavList from '../film-nav-list/film-nav-list';
import MoviePageOverview from '../../../components/movie-page-overview/movie-page-overview';

function FilmCard(): JSX.Element {
  return (
    <>
      <nav className='film-nav film-card__nav'>
        <ul className='film-nav__list'>
          <FilmNavList />
        </ul>
      </nav>

      <MoviePageOverview />
    </>
  );
}

export default FilmCard;
