import MoviePageOverview from '../../../components/movie-page-overview/movie-page-overview';
import MoviePageReviews from '../../../components/movie-page-reviews/movie-page-reviews';
import MoviePageDetails from '../../../components/movie-page-details/movie-page-details';
import { useAppSelector } from '../../../hooks';
import { FilmType } from '../../../types/types';

type FilmCardInfoProps = {
  film: FilmType;
};

function FilmCardInfo({film}: FilmCardInfoProps): JSX.Element {
  const activeItem = useAppSelector((state) => state.activeItem);

  if (activeItem === 'Overview') {
    return (<MoviePageOverview film={film}/>);
  } else if (activeItem === 'Reviews') {
    return (<MoviePageReviews film={film}/>);
  } return (<MoviePageDetails film={film}/>);
}

export default FilmCardInfo;
