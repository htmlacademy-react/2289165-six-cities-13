import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { logoutAction } from '../../store/api-actions.ts';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const logoutClickHandle = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link className='header__logo-link header__logo-link--active' to={AppRoute.MainPage}>
              <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoute.FavouritesPage : AppRoute.LoginPage}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {isAuthorized &&
                    <>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </>}
                </Link>
              </li>
              <li className="header__nav-item">
                {isAuthorized ?
                  <Link
                    className="header__nav-link"
                    onClick={logoutClickHandle}
                    to={AppRoute.MainPage}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                  :
                  <Link className="header__nav-link" to={AppRoute.LoginPage}>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
