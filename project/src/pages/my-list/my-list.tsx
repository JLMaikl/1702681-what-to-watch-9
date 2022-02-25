import Logo from '../../components/logo/logo';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import { FilmType } from '../../types/types';

type Props = {
  catalogFilms: FilmType[];
};

function MyList({catalogFilms}: Props): JSX.Element {
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo />

        <h1 className='page-title user-page__title'>My list</h1>

        <UserBlock />
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <div className='catalog__films-list'>
          <SmallFilmCard catalogFilms={catalogFilms}/>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
