type NavListProps = {
  filmLink: string,
}

function NavList({filmLink}: NavListProps): JSX.Element {
  return (
    <li className='film-nav__item film-nav__item--active'>
      <a href='#' className='film-nav__link'>{filmLink}</a>
    </li>
  );
}

export default NavList;
