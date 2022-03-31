type NavListProps = {
  filmLink: string,
  active: string,
  handleActiveItemClick: (activeItem: string) => void,
}

function NavList({filmLink, active, handleActiveItemClick}: NavListProps): JSX.Element {

  return (
    <li onClick={() => handleActiveItemClick(filmLink)} className={`film-nav__item ${active}`}>
      <a href='javascript://' className='film-nav__link'>{filmLink}</a>
    </li>
  );
}

export default NavList;
