const Setting = {
  PlacesCount: 100
};

const AppRoute = {
  MainPage: '/',
  LoginPage: '/login',
  FavouritesPage: '/favorites',
  OfferPage: '/offer/:id',
  PageNotFound: '*'
} as const;

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {Setting, AppRoute, AuthorizationStatus};
