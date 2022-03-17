import { filmNavLink } from '../../../const';
import NavList from '../nav-list/nav-list';

function FilmNavList(): JSX.Element {
  return (
    <ul className='film-nav__list'>
      {filmNavLink.map((filmLink) => {<NavList filmLink={filmLink.link}/>;})}
    </ul>
  );
}

export default FilmNavList;
