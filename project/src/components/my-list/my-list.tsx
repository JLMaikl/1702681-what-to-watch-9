import Logo from '../logo/logo';
import SmallFilmCard from '../small-film-card/small-film-card';
import UserBlock from '../user-block/user-block';
import Footer from '../footer/footer';

function MyList() {
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
          <SmallFilmCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
