/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import AddReviewForm from './add-review-form/add-review-form';
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


function AddReview(): JSX.Element {
  const { film } = useAppSelector((state) => state);

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film.backgroundImage} alt='The Grand Budapest Hotel' />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo />

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`${AppRoute.Film}${film.id}`} className='breadcrumbs__link'>{film.name}</Link>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src={film.backgroundImage} alt={film.name} width='218' height='327' />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
}

export default AddReview;
