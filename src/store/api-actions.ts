import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '.';
import { APIRoute, AuthorizationStatus } from '../const';
import { OfferPreview, OfferFull } from '../mocks/offers';
import { saveToken, dropToken } from '../services/token';
import {
  requireAuthorization, redirectToRoute, setLoadingStatus, downloadOffers,
  downloadFullOffer, downloadReviews, downloadNearby, setUserInfo, downloadFavorites
} from './action';
import { AppRoute } from '../const';
import { Review, User, ReviewToPost} from '../mocks/review';
import { FavouriteOffer } from '../mocks/favourite';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {

    dispatch(setLoadingStatus(true));
    const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);
    dispatch(downloadOffers(data));
    dispatch(setLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<User>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.MainPage));
      dispatch(setUserInfo(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {data} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MainPage));
    dispatch(setUserInfo(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
  },
);

export const fetchFullOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFullOffer',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<OfferFull>(`${APIRoute.Offers}/${id}`);
      dispatch(downloadFullOffer(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFoundPage));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Review}/${id}`);
      dispatch(downloadReviews(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFoundPage));
    }
  }
);

export const fetchNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearby',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
      dispatch(downloadNearby(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFoundPage));
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FavouriteOffer[]>(APIRoute.Favourites);
    dispatch(downloadFavorites(data));
  },
);


export const postReviewAction = createAsyncThunk<void, ReviewToPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    await api.post<Review>(`${APIRoute.Review}/${offerId}`, {comment, rating});
    dispatch(fetchReviewsAction(offerId));
  },
);

export type AuthData = {
  login: string;
  password: string;
};


export type UserData = {
  id: number;
  email: string;
  token: string;
};
