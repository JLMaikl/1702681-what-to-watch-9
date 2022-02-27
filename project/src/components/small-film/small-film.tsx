import { FilmType } from '../../types/types';

type Props = {
  catalogFilm: FilmType;
};


function SmallFilm({catalogFilm}: Props): JSX.Element {
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img
          src={catalogFilm.posterImage}
          alt={catalogFilm.name}
          width='280'
          height='175'
        />
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='film-page.html'>
          {catalogFilm.name}
        </a>
      </h3>
    </article>
  );
}

export default SmallFilm;
