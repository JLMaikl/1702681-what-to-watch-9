import { PropsWithChildren } from 'react';
import { FilmType } from '../../types/types';
import { useDispatch } from 'react-redux';
import { checkFilm } from '../../store/action';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


type FilmCardProps = {
  catalogFilm: FilmType;
  onMouseEnterCallback: (film: FilmType) => void;
  onMouseEnterCallbackOut: () => void;
};


function FilmCard(props: PropsWithChildren<FilmCardProps>): JSX.Element {
  const dispatch = useDispatch();

  const onClickActiveFilm = (filmActive: FilmType) => {
    dispatch(checkFilm(filmActive));
  };


  const { catalogFilm, onMouseEnterCallback, onMouseEnterCallbackOut, children } = props;
  return (

    <article className='small-film-card catalog__films-card' onMouseEnter={() => onMouseEnterCallback(catalogFilm)} onMouseOut={() => onMouseEnterCallbackOut()} onClick={() => onClickActiveFilm(catalogFilm)}>
      <Link to={`${AppRoute.Films}${catalogFilm.id}`}>
        <div>
          <div className='small-film-card__image'>
            {children || <img src={catalogFilm.posterImage} alt={catalogFilm.name} width='280' height='175' />}
          </div>
          <h3 className='small-film-card__title'>
            <a className='small-film-card__link' href='film-page.html'>
              {catalogFilm.name}
            </a>
          </h3>
        </div>
      </Link>
    </article>

  );
}

export default FilmCard;
