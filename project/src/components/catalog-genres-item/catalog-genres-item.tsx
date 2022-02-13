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

  const catalogGenresItem = catalogGenresItems.map(function (item): JSX.Element {
    return (
      <li key={item.genre} className={`catalog__genres-item ${item.active}`}>
        <a href='#' className='catalog__genres-link'>
          {item.genre}
        </a>
      </li>
    );
  });


  return (
    <>{catalogGenresItem}</>
  );
}

export default CatalogGenresItem;
