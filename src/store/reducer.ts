import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview, OfferPreviewData } from '../mocks/offers';
// import { CityName } from '../const.ts';
// import { OfferPreview, offerPreviewList } from '../mocks/offer.ts';
import { changeCity, changeSortingType, getOffers } from './action.ts';
import { SortingType } from '../const.ts';

//to const
const DEFAULT_SELECTED_CITY = 'Paris';
const DEFAULT_SORT_TYPE = SortingType.Popular;

type InitialState = {
  city: string;
  offers: OfferPreview[];
  sortType: SortingType;
}

const initialState: InitialState = {
  city: DEFAULT_SELECTED_CITY,
  offers: [],
  sortType: DEFAULT_SORT_TYPE,
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
    });
});

export {reducer};
