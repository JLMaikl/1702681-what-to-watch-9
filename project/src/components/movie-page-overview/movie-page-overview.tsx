import { FilmType } from '../../types/types';
import { SCORE_FILM } from '../../const';

type MoviePageOverviewProps = {
  film: FilmType;
};

const getScoreFilm = (rating: number) => {
  if (rating < 3) {
    return SCORE_FILM.Bad;
  }
  if (rating < 5) {
    return SCORE_FILM.Normal;
  }
  if (rating < 8) {
    return SCORE_FILM.Good;
  }
  if (rating < 10) {
    return SCORE_FILM.VeryGood;
  }
  return SCORE_FILM.Awesome;
};

function MoviePageOverview({film}: MoviePageOverviewProps): JSX.Element {
  return (
    <>
      <div className='film-rating'>
        <div className='film-rating__score'>{film.rating}</div>
        <p className='film-rating__meta'>
          <span className='film-rating__level'>{getScoreFilm(film.rating)}</span>
          <span className='film-rating__count'>{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className='film-card__text'>
        <p>{film.description}</p>


        <p className='film-card__director'><strong>Director: {film.director}</strong></p>

        <p className='film-card__starring'><strong>Starring: {film.starring.join(', ')}</strong></p>
      </div>
    </>

  );
}

export default MoviePageOverview;
