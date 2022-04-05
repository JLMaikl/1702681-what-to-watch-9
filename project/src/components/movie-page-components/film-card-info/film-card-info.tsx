import MoviePageOverview from '../../../components/movie-page-overview/movie-page-overview';
import MoviePageReviews from '../../../components/movie-page-reviews/movie-page-reviews';
import MoviePageDetails from '../../../components/movie-page-details/movie-page-details';
import { useAppSelector } from '../../../hooks';
import { FilmType } from '../../../types/types';
import { Review } from '../../../types/review';

type FilmCardInfoProps = {
  film: FilmType;
  reviews: Review[];
};

function FilmCardInfo({ film, reviews }: FilmCardInfoProps): JSX.Element {
  const activeItem = useAppSelector((state) => state.activeItem);

  if (activeItem === 'Overview') {
    return (<MoviePageOverview film={film}/>);
  } else if (activeItem === 'Reviews') {
    return (<MoviePageReviews reviews={reviews}/>);
  } return (<MoviePageDetails film={film}/>);
}

export default FilmCardInfo;
