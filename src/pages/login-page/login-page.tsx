import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import { useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { toast } from 'react-toastify';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const regForPassword = /(?=.*[a-zA-Zа-яёА-Я])(?=.*\d)[^\s]+$/;

  const isPasswordValid = (password: string) => regForPassword.test(password);
  const ERROR_MESSAGE = 'Пароль должен состоять минимум из одной буквы и цифры';

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;

    if (!login || !password) {
      return;
    }

    if (!isPasswordValid(password)) {
      toast.error(ERROR_MESSAGE);
      return;
    }

    dispatch(loginAction({
      login: login.trim(),
      password: password.trim()
    }));

  };


  return (
    <div className='page page--gray page--login'>
      <Header />

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form
              className='login__form form'
              action='#'
              method='post'
              onSubmit={handleFormSubmit}
            >
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input className='login__input form__input'
                  type='email'
                  name="email"
                  placeholder='Email'
                  required
                  minLength={1}
                  ref={loginRef}
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                  minLength={1}
                  ref={passwordRef}
                />
              </div>
              <button className='login__submit form__submit button' type='submit'>
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link className='locations__item-link' to={AppRoute.MainPage}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

