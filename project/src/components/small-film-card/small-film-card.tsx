import catalogFilm from '../../catalog-film';
import SmallFilm from '../small-film/small-film';
import { FilmType } from '../../types/types';

type Props = {
  catalogFilms: FilmType[];
};


function SmallFilmCard({catalogFilms}: Props): JSX.Element {

  return (
    <>{catalogFilm.map((id) => <SmallFilm key={id.id} catalogFilms={catalogFilms}/>)}</>
  );
}

export default SmallFilmCard;
