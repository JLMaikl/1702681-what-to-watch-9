// import { Link } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';


function UserBlock() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const handleUserLogOutClick = () => {
    dispatch(logoutAction());
    navigate(APIRoute.Login);
  };

  return (
    <ul className='user-block'>
      <li className='user-block__item'>
        <div className='user-block__avatar'>
          <img
            src='img/avatar.jpg'
            alt='User avatar'
            width='63'
            height='63'
          />
        </div>
      </li>
      <li className='user-block__item'>
        {/* <Link to={AppRoute.Login} onClick={(evt) => { evt.preventDefault(); dispatch(logoutAction());}} className='user-block__link'>Sign out</Link> */}
        <span className="user-block__link" onClick={handleUserLogOutClick}>Sign out</span>
      </li>
    </ul >
  );
}

export default UserBlock;
