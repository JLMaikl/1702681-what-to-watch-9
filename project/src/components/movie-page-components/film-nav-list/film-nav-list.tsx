import { filmNavLinks } from '../../../const';
import NavList from '../nav-list/nav-list';
import { useDispatch } from 'react-redux';
import { checkActiveItem } from '../../../store/action';

function FilmNavList(): JSX.Element {
  const dispatch = useDispatch();

  const handleActiveItemClick = (activeItem: string) => {
    dispatch(checkActiveItem(activeItem));
  };

  return (
    <ul className='film-nav__list'>
      {filmNavLinks.map((filmLink) => (<NavList filmLink={filmLink.link} key={filmLink.id} active={filmLink.active} handleActiveItemClick={handleActiveItemClick}/>))}
    </ul>
  );
}

export default FilmNavList;
