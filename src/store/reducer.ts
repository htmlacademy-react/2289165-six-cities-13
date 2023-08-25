import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview, OfferFull } from '../mocks/offers';
import {
  changeCity, changeSortingType, downloadOffers, setLoadingStatus,
  downloadFullOffer, downloadReviews, setUserInfo, downloadNearby, downloadFavorites
} from './action.ts';
import { SortingType, AuthorizationStatus } from '../const.ts';
import { requireAuthorization } from './action.ts';
import { Review, User } from '../mocks/review.ts';

//to const
const DEFAULT_SELECTED_CITY = 'Paris';
const DEFAULT_SORT_TYPE = SortingType.Popular;
export type FavoriteItem = OfferPreview

type InitialState = {
  city: string;
  offers: OfferPreview[];
  sortType: SortingType;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  fullOffer: OfferFull | null;
  reviews: Review[];
  userInfo: User | null;
  nearby: OfferPreview[];
  favorites: FavoriteItem[];
}

const initialState: InitialState = {
  city: DEFAULT_SELECTED_CITY,
  offers: [],
  sortType: DEFAULT_SORT_TYPE,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  fullOffer: null,
  reviews: [],
  userInfo: null,
  nearby: [],
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    // .addCase(getOffers, (state) => {
    //   state.offers = OfferPreviewData;
    // })
    .addCase(changeSortingType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(downloadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(downloadFullOffer, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(downloadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(downloadNearby, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(downloadFavorites, (state, action) => {
      state.favorites = action.payload;
    });


});

export { reducer };
