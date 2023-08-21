import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import RedirectToMainPage from '../redirect-to-main-page/redirect-to-main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import { OfferPreview, OfferPageData } from '../../mocks/offers';


type AppProps = {
  offers: OfferPreview[];
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path={AppRoute.MainPage}
          element={<MainPage offers={offers} />}
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
          element={<OfferPage offers={OfferPageData}/>}
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

