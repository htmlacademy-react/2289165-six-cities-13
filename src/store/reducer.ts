import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview, OfferPreviewData } from '../mocks/offers';
// import { CityName } from '../const.ts';
// import { OfferPreview, offerPreviewList } from '../mocks/offer.ts';
import { changeCity, changeSortingType, getOffers, downloadOffers, setLoadingStatus } from './action.ts';
import { SortingType, AuthorizationStatus } from '../const.ts';
import { requireAuthorization } from './action.ts';

//to const
const DEFAULT_SELECTED_CITY = 'Paris';
const DEFAULT_SORT_TYPE = SortingType.Popular;

type InitialState = {
  city: string;
  offers: OfferPreview[];
  sortType: SortingType;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  city: DEFAULT_SELECTED_CITY,
  offers: [],
  sortType: DEFAULT_SORT_TYPE,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = OfferPreviewData;
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
    });
});

export { reducer };
