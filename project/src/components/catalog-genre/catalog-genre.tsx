import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type CatalogGenresItemsProps = {
  genre: string,
  active: string,
  handleGenreClick: (activeGenre: string) => void,
}


function CatalogGenre({ genre, active, handleGenreClick }: CatalogGenresItemsProps): JSX.Element {
  const { activeGenre } = useAppSelector((state) => state);

  return (
    <li
      className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}
      onClick={() => handleGenreClick(genre)}
    >
      <Link to='#' className='catalog__genres-link'>
        {genre}
      </Link>
    </li>
  );
}

export default CatalogGenre;
