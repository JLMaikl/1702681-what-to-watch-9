import catalogFilm from '../../catalog-film';
import SmallFilm from '../small-film/small-film';


function SmallFilmCard(): JSX.Element {

  return (
    <>{catalogFilm.map((id) => <SmallFilm key={id.id}/>)}</>
  );
}

export default SmallFilmCard;
