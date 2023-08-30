import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type RedirectToMainPageProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function RedirectToMainPage(props: RedirectToMainPageProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.MainPage} />
  );
}

export default RedirectToMainPage;
