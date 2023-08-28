import {createAction} from '@reduxjs/toolkit';
import { SortingType } from '../const';
import { AuthorizationStatus, AppRoute } from '../const';
import { Review, User, OfferFull, OfferPreview, FavouriteOffer } from '../types';

export const changeCity = createAction('main-page/changeCity', (city: string) => ({
  payload: city
}));

export const changeSortingType = createAction('sorting/changeSortingType', (sortingType: SortingType) => ({
  payload: sortingType
}));

export const downloadOffers = createAction<OfferPreview[]>('data/downloadOffers');

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const downloadFullOffer = createAction<OfferFull| null>('data/downloadFullOffer');

export const downloadReviews = createAction<Review[]>('data/downloadReviews');

export const setUserInfo = createAction <User | null>('user/setUserInfo');

export const downloadNearby = createAction<OfferPreview[]>('user/downloadNearby');

export const downloadFavorites = createAction<FavouriteOffer[]>('data/downloadFavorites');

export const setFavouriteStatus = createAction<OfferPreview>('data/setFavouriteStatus');

export const setLoadingFullOfferStatus = createAction<boolean>('data/setLoadingFullOfferStatus');

export const setReviewStatus = createAction<boolean>('data/setReviewStatus');

export const setSendingReviewStatus = createAction<boolean>('data/setSendingReviewStatus');
