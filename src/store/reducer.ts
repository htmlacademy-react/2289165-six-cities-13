import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview, OfferFull, Review, User } from '../types.ts';
import {
  changeCity, changeSortingType, downloadOffers, setLoadingStatus,
  downloadFullOffer, downloadReviews, setUserInfo, downloadNearby, downloadFavorites, setLoadingFullOfferStatus,
  setFavouriteStatus, setReviewStatus, setSendingReviewStatus } from './action.ts';
import { AuthorizationStatus, SortingType, DEFAULT_SELECTED_CITY, DEFAULT_SORT_TYPE } from '../const.ts';
import { requireAuthorization } from './action.ts';


type FavoriteItem = OfferPreview

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
  isFavourite: boolean;
  isLoadingFullOffer: boolean;
  isReviewSuccess: boolean;
  isSendingReview: boolean;
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
  isFavourite: false,
  isLoadingFullOffer: true,
  isReviewSuccess: false,
  isSendingReview: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
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
    })
    .addCase(setFavouriteStatus, (state, action) => {
      const payloadOffer = action.payload;
      const payloadOfferIndex = state.offers.findIndex((offer) => offer.id === payloadOffer.id);
      const payloadFavoriteOfferIndex = state.favorites.findIndex((offer) => offer.id === payloadOffer.id);

      if (state.fullOffer) {
        state.fullOffer.isFavorite = payloadOffer.isFavorite;
      }
      state.offers[payloadOfferIndex] = payloadOffer;

      if (payloadOffer.isFavorite) {
        state.favorites.push(payloadOffer);
      } else {
        state.favorites.splice(payloadFavoriteOfferIndex, 1);
      }
    })
    .addCase(setLoadingFullOfferStatus, (state, action) => {
      state.isLoadingFullOffer = action.payload;
    })
    .addCase(setReviewStatus, (state, action) => {
      state.isReviewSuccess = action.payload;
    })
    .addCase(setSendingReviewStatus, (state, action) => {
      state.isSendingReview = action.payload;
    });
});

export { reducer };
