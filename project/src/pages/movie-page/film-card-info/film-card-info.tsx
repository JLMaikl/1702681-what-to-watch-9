import MoviePageOverview from '../../../components/movie-page-overview/movie-page-overview';
import MoviePageReviews from '../../../components/movie-page-reviews/movie-page-reviews';
import MoviePageDetails from '../../../components/movie-page-details/movie-page-details';
import { useAppSelector } from '../../../hooks';

function FilmCardInfo(): JSX.Element {
  const activeItem = useAppSelector((state) => state.activeItem);

  if (activeItem === 'Overview') {
    return (<MoviePageOverview />);
  } else if (activeItem === 'Reviews') {
    return (<MoviePageReviews />);
  } return (<MoviePageDetails />);
}

export default FilmCardInfo;
