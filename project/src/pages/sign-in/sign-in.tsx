import { useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../const';

function SignIn(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      navigate(AppRoute.Main);
    }
  };

  const passwordValidity = () => {
    const REGULAR = /(?=.*[0-9])(?=.*[a-z])/g;

    if (loginRef.current !== null && passwordRef.current !== null) {
      const shield =passwordRef.current;
      const password = passwordRef.current.value;
      shield.setCustomValidity('');

      if(password.length < 2){
        shield.setCustomValidity(
          'Для пароля необходимо минимум 2 символа',
        );
      } else if(!REGULAR.test(password)){
        shield.setCustomValidity(
          'Для пароля необходимо минимум 1 латинская буква и 1 цифра',
        );
      }
      else{
        shield.setCustomValidity('');
      }
      shield.reportValidity();
    }
  };

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo />

        <h1 className='page-title user-page__title'>Sign in</h1>
      </header>

      <div className='sign-in user-page__content'>
        <form action='#' className='sign-in__form' onSubmit={handleSubmit}>
          <div className='sign-in__fields'>
            <div className='sign-in__field'>
              <input  ref={loginRef} className='sign-in__input' type='email' placeholder='Email address' name='user-email' id='user-email'/>
              <label className='sign-in__label visually-hidden' htmlFor='user-email'>Email address</label>
            </div>
            <div className='sign-in__field'>
              <input onChange= {() => {passwordValidity(); }} ref={passwordRef} className='sign-in__input' type='password' placeholder='Password' name='user-password' id='user-password' />
              <label className='sign-in__label visually-hidden' htmlFor='user-password'>Password</label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button  className='sign-in__btn' type='submit'>Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;

