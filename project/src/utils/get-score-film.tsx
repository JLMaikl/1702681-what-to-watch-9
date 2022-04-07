import { SCORE_FILM, SCORE_RATING } from '../const';

const getScoreFilm = (rating: number) => {
  if (rating < SCORE_RATING.Bad) {
    return SCORE_FILM.Bad;
  }
  if (rating < SCORE_RATING.Good) {
    return SCORE_FILM.Normal;
  }
  if (rating < SCORE_RATING.Normal) {
    return SCORE_FILM.Good;
  }
  if (rating < SCORE_RATING.VeryGood) {
    return SCORE_FILM.VeryGood;
  }
  return SCORE_FILM.Awesome;
};

export default getScoreFilm;
