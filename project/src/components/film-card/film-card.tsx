import { PropsWithChildren } from 'react';
import { FilmType } from '../../types/types';

type FilmCardProps = {
  catalogFilm: FilmType;
  onMouseEnterCallback: (film: FilmType) => void;
  onMouseEnterCallbackOut: () => void;
};


function FilmCard(props: PropsWithChildren<FilmCardProps>): JSX.Element {
  const { catalogFilm, onMouseEnterCallback, onMouseEnterCallbackOut, children } = props;
  return (
    <article className='small-film-card catalog__films-card' onMouseEnter={() => onMouseEnterCallback(catalogFilm)} onMouseOut={() => onMouseEnterCallbackOut()}>
      <div className='small-film-card__image'>
        {children || <img src={catalogFilm.posterImage} alt={catalogFilm.name} width='280' height='175' />}
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='film-page.html'>
          {catalogFilm.name}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;
