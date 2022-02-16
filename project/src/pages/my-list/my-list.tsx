import Logo from '../../components/logo/logo';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';

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
