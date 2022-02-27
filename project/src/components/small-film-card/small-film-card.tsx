import SmallFilm from '../small-film/small-film';
import { FilmType } from '../../types/types';

type Props = {
  catalogFilms: FilmType[];
};


function SmallFilmCard({catalogFilms}: Props): JSX.Element {

  return (
    <>{catalogFilms.map((item) => <SmallFilm key={item.id} catalogFilm={item}/>)}</>
  );
}

export default SmallFilmCard;
