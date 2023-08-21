const AppRoute = {
  MainPage: '/',
  LoginPage: '/login',
  FavouritesPage: '/favorites',
  OfferPage: '/offer/:id',
  PageNotFound: '*',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const MAX_RATING_STARS = 5;
const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;
const DEFAULT_RATING = 0;

export { AppRoute, AuthorizationStatus, MAX_RATING_STARS, MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT, DEFAULT_RATING };

