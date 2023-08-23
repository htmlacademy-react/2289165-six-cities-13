import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { useAppDispatch } from '../../hooks';
import { getOffers } from '../../store/action';
import { useAppSelector } from '../../hooks';


// type AppProps = {
//   offers: OfferPreview[];
// }

function App(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  dispatch(getOffers());

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path={AppRoute.MainPage}
          element={<MainPage offers = {offers}/>}
        />
        <Route
          path={AppRoute.LoginPage}
          element={
            <RedirectToMainPage authorizationStatus={AuthorizationStatus.NoAuth}>
              <LoginPage />
            </RedirectToMainPage>
          }
        />
        <Route
          path={AppRoute.FavouritesPage}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
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
    </BrowserRouter>
  );
}

export default App;

