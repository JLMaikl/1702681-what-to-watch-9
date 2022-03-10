import { FilmType } from '../types/types';
import { useSelector } from 'react-redux';
import { State } from '../types/state';


function GenreFilmFilter(catalogFilms: FilmType[]): FilmType[] {

  const Genre = useSelector((state: State) => state.activeGenre);

  if (Genre === 'All genres') {
    return catalogFilms;
  } else {
    return catalogFilms.filter((filmItem: FilmType ) => filmItem.genre === Genre);
  }
}

export default GenreFilmFilter;
