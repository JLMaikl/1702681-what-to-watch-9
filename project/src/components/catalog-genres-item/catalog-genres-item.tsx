import CatalogGenre from '../catalog-genre/catalog-genre';

function CatalogGenresItem() {

  const catalogGenresItems = [
    {
      genre: 'All genres',
      active: 'catalog__genres-item--active',
    },
    {
      genre: 'Comedies',
      active: '',
    },
    {
      genre: 'Crime',
      active: '',
    },
    {
      genre: 'Documentary',
      active: '',
    },
    {
      genre: 'Dramas',
      active: '',
    },
    {
      genre: 'Horror',
      active: '',
    },
    {
      genre: 'Kids & Family',
      active: '',
    },
    {
      genre: 'Romance',
      active: '',
    },
    {
      genre: 'Sci-Fi',
      active: '',
    },
    {
      genre: 'Thrillers',
      active: '',
    }];

  return (
    <>{catalogGenresItems.map((catalogGenresItem) => <CatalogGenre genre={catalogGenresItem.genre} active={catalogGenresItem.active} key={catalogGenresItem.genre} />)} </>

  );
}

export default CatalogGenresItem;
