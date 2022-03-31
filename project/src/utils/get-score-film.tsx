import { SCORE_FILM } from '../const';

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

export default getScoreFilm;
