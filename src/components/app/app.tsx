import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import RedirectToMainPage from '../redirect-to-main-page/redirect-to-main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import { OfferPageData, OfferPreviewData } from '../../mocks/offers';
import { reviews } from '../../mocks/review';
import { useAppDispatch, useAppSelector } from '../../hooks';
// import { getOffers } from '../../store/action';
import { downloadOffers } from '../../store/action';
import LoadingPage from '../../pages/loading-page/loading-page';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';


// type AppProps = {
//   offers: OfferPreview[];
// }

function App(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  dispatch(downloadOffers);
  // dispatch(getOffers());

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const isLoading = useAppSelector((state) => state.isLoading);
  if (authorizationStatus === AuthorizationStatus.Unknown || isLoading) {
    return (<LoadingPage />);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          index
          path={AppRoute.MainPage}
          element={<MainPage offers = {offers}/>}
        />
        <Route
          path={AppRoute.LoginPage}
          element={
            <RedirectToMainPage authorizationStatus={authorizationStatus}>
              <LoginPage />
            </RedirectToMainPage>
          }
        />
        <Route
          path={AppRoute.FavouritesPage}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavouritesPage favouriteData={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.OfferPage}
          element={<OfferPage reviews={reviews} offers={OfferPageData} someOffers={OfferPreviewData}/>}
        />
        <Route
          path={AppRoute.PageNotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

