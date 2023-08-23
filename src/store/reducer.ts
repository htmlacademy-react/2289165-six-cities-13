import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview, OfferPreviewData } from '../mocks/offers';
// import { CityName } from '../const.ts';
// import { OfferPreview, offerPreviewList } from '../mocks/offer.ts';
import { changeCity, getOffers } from './action.ts';

//to const
const DEFAULT_SELECTED_CITY = 'Paris';

type InitialState = {
  city: string;
  offers: OfferPreview[];
}

const initialState: InitialState = {
  city: DEFAULT_SELECTED_CITY,
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = OfferPreviewData;
    });
});

export {reducer};
