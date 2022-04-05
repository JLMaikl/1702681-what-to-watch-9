import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';

type NavListProps = {
  filmLink: string,
  active: string,
  handleActiveItemClick: (activeItem: string) => void,
}

function NavList({filmLink, active, handleActiveItemClick}: NavListProps): JSX.Element {
  const { activeItem } = useAppSelector((state) => state);

  return (
    <li onClick={() => handleActiveItemClick(filmLink)} className={`film-nav__item ${filmLink === activeItem ? 'film-nav__item--active' : ''}`}>
      <Link to='#' className='film-nav__link'>{filmLink}</Link>
    </li>
  );
}

export default NavList;
