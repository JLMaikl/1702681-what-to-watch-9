type CatalogGenresItemsProps = {
  genre: string,
  active: string,
}


function CatalogGenre({ genre, active }: CatalogGenresItemsProps): JSX.Element {

  return (
    <li className={`catalog__genres-item ${active}`}>
      <a href='#' className='catalog__genres-link'>
        {genre}
      </a>
    </li>
  );
}

export default CatalogGenre;
