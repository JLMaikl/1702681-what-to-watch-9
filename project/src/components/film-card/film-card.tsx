import { FilmType } from '../../types/types';

type Props = {
  catalogFilm: FilmType;
  onMouseEnterCallback: any;
  onMouseEnterCallbackOut: any;
  children: any;
};


function FilmCard({ catalogFilm, onMouseEnterCallback, onMouseEnterCallbackOut, children }: Props): JSX.Element {

  return (
    <article className='small-film-card catalog__films-card' onMouseEnter={(evt) => onMouseEnterCallback(evt, catalogFilm)} onMouseOut={() => onMouseEnterCallbackOut()}>
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
