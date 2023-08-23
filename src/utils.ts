import { MAX_RATING_STARS } from './const';

const roundRating = (rating: number) => window.Math.round(rating) * 100 / MAX_RATING_STARS;
const getBigFirstLetter = (word: string) => word[0].toUpperCase() + word.slice(1);
const getEnding = (amount: number) => amount > 1 ? 's' : '';


import { OfferPreview } from './mocks/offers';
const getOffersByCity = (offers: OfferPreview[], selectedCity: string) =>
  offers.filter((offer) =>
    offer.city.name === selectedCity);


export { roundRating, getBigFirstLetter, getEnding, getOffersByCity };

