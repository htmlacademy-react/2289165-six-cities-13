const AppRoute = {
  MainPage: '/',
  LoginPage: '/login',
  FavouritesPage: '/favorites',
  OfferPage: '/offer/:id',
  PageNotFound: '*',
} as const;

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

// enum CityName {
//   Paris = 'Paris',
//   Cologne = 'Cologne',
//   Brussels = 'Brussels',
//   Amsterdam = 'Amsterdam',
//   Hamburg = 'Hamburg',
//   Dusseldorf = 'Dusseldorf'
// }

const CityName = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'];


const MAX_RATING_STARS = 5;
const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;
const DEFAULT_RATING = 0;
const MAX_OFFERS_PREVIEW = 3;

export { AppRoute, AuthorizationStatus, MAX_RATING_STARS, MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT, DEFAULT_RATING,
  MAX_OFFERS_PREVIEW, CityName };

