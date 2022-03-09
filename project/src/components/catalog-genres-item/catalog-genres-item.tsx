/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable semi */
import CatalogGenre from '../catalog-genre/catalog-genre';
import { catalogGenresItems } from '../../const';
import { useDispatch } from 'react-redux';
import { checkGenre } from '../../store/action';

function CatalogGenresItem() {

  const dispatch = useDispatch();

  const handleGenreClick = (activeGenre: string) => {
    dispatch(checkGenre(activeGenre))

  };

  return (
    <>{catalogGenresItems.map((catalogGenresItem) =>
      (<CatalogGenre
        genre={catalogGenresItem.genre}
        active={catalogGenresItem.active}
        key={catalogGenresItem.genre}
        hendleGenreClick={handleGenreClick}
      />))}
    </>

  );
}

export default CatalogGenresItem;
