import catalogFilm from '../../catalogFilm';


function SmallFilmCard(): JSX.Element {

  const film = catalogFilm.map(function(film): JSX.Element {
    return (
      <article key={film.id} className='small-film-card catalog__films-card'>
        <div className='small-film-card__image'>
          <img
            src='img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
            alt='Fantastic Beasts: The Crimes of Grindelwald'
            width='280'
            height='175'
          />
        </div>
        <h3 className='small-film-card__title'>
          <a className='small-film-card__link' href='film-page.html'>
            Fantastic Beasts: The Crimes of Grindelwald
          </a>
        </h3>
      </article>
    );
  });

  return (
    <>{film}</>
  );
}

export default SmallFilmCard;
