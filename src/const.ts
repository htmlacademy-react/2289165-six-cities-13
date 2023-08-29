enum AppRoute {
  MainPage = '/',
  LoginPage = '/login',
  FavouritesPage = '/favorites',
  OfferPage = '/offer/:id',
  NotFoundPage = '*',
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
  Favourites = 'favorite',
  Slash = '/',
}

// const сityNames = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];


enum SortingType {
  Popular = 'Popular',
  LowToHighPrice = 'Price: low to high',
  HighToLowPrice = 'Price: high to low',
  TopRated = 'Top rated first'
}

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
const DEFAULT_SELECTED_CITY = 'Paris';
const DEFAULT_SORT_TYPE = SortingType.Popular;

const MAX_RATING_STARS = 5;
const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;
const DEFAULT_RATING = 0;
const MAX_OFFERS_PREVIEW = 3;
const MAX_REVIEWS_COUNT = 10;


export {
  AppRoute, AuthorizationStatus, APIRoute, MAX_RATING_STARS, MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT, DEFAULT_RATING,
  MAX_OFFERS_PREVIEW, SortingType, AUTH_TOKEN_KEY_NAME, DEFAULT_SELECTED_CITY, DEFAULT_SORT_TYPE, MAX_REVIEWS_COUNT,
};

