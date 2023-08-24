import {createAction} from '@reduxjs/toolkit';
import { SortingType } from '../const';
import { OfferPreview } from '../mocks/offers';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeCity = createAction('main-page/changeCity', (city: string) => ({
  payload: city
}));

export const getOffers = createAction('app/getOffers');

export const changeSortingType = createAction('sorting/changeSortingType', (sortingType: SortingType) => ({
  payload: sortingType
}));

export const downloadOffers = createAction<OfferPreview[]>('data/downloadOffers');

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<typeof AppRoute>('app/redirectToRoute');

