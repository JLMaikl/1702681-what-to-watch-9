import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


function Player(): JSX.Element {
  const {film} = useAppSelector((state) => state);

  return (
    <div className='player'>
      <video src={film.videoLink} className='player__video' poster={film.backgroundImage} controls></video>

      <Link to={`${AppRoute.Film}${film.id}`}>
        <button type='button' className='player__exit'>Exit</button>
      </Link>

    </div>
  );
}

export default Player;
