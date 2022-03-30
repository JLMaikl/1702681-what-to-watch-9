/* eslint-disable no-console */
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { useNavigate, Link } from 'react-router-dom';
import { fetchFavoriteAction } from '../../store/api-actions';


function UserBlock() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);


  const handleUserLogOutClick = () => {
    dispatch(logoutAction());
    navigate(AppRoute.Login);
  };

  const getFavoriteFilms = () => {
    dispatch(fetchFavoriteAction());
    navigate(AppRoute.MyList);
  };

  return (
    <ul className='user-block'>
      {
        authorizationStatus === AuthorizationStatus.Auth ?
          <>
            <li className='user-block__item'>
              <div className='user-block__avatar' onClick={getFavoriteFilms}>
                <img
                  src='img/avatar.jpg'
                  alt='User avatar'
                  width='63'
                  height='63'
                />
              </div>
            </li>
            <li className='user-block__item'>
              <span className="user-block__link" onClick={handleUserLogOutClick}>Sign out</span>
            </li>
          </>
          :
          <li className='user-block__item'>
            <Link to={AppRoute.Login}className="user-block__link" >Sign in</Link>
          </li>
      }
    </ul >
  );
}

export default UserBlock;
