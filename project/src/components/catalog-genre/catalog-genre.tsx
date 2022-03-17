type CatalogGenresItemsProps = {
  genre: string,
  active: string,
  hendleGenreClick: (activeGenre: string) => void,
}


function CatalogGenre({ genre, active, hendleGenreClick }: CatalogGenresItemsProps): JSX.Element {

  return (
    <li
      className={`catalog__genres-item ${active}`}
      onClick={() => hendleGenreClick(genre)}
    >
      <a href='javascript://' className='catalog__genres-link'>
        {genre}
      </a>
    </li>
  );
}

export default CatalogGenre;
