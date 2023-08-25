// const AppRoute = {
//   MainPage: '/',
//   LoginPage: '/login',
//   FavouritesPage: '/favorites',
//   OfferPage: '/offer/:id',
//   PageNotFound: '*',
// } as const;

enum AppRoute {
  MainPage= '/',
  LoginPage= '/login',
  FavouritesPage= '/favorites',
  OfferPage= '/offer/:id',
  NotFoundPage= '*',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Review = '/comments',
  Nearby = '/nearby',
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


enum SortingType {
  Popular = 'Popular',
  LowToHighPrice = 'Price: low to high',
  HighToLowPrice = 'Price: high to low',
  TopRated = 'Top rated first'
}


const MAX_RATING_STARS = 5;
const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;
const DEFAULT_RATING = 0;
const MAX_OFFERS_PREVIEW = 3;

export { AppRoute, AuthorizationStatus, APIRoute, MAX_RATING_STARS, MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT, DEFAULT_RATING,
  MAX_OFFERS_PREVIEW, CityName, SortingType };

