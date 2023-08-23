import { MAX_RATING_STARS } from './const';
import { OfferPreview } from './mocks/offers';
import { SortingType } from './const';

const roundRating = (rating: number) => window.Math.round(rating) * 100 / MAX_RATING_STARS;
const getBigFirstLetter = (word: string) => word[0].toUpperCase() + word.slice(1);
const getEnding = (amount: number) => amount > 1 ? 's' : '';

const getOffersByCity = (offers: OfferPreview[], selectedCity: string) =>
  offers.filter((offer) =>
    offer.city.name === selectedCity);

const sortOffersByPriceUp = (firstOffer: OfferPreview, secondOffer: OfferPreview) =>
  firstOffer.price - secondOffer.price;

const sortOffersByPriceDown = (firstOffer: OfferPreview, secondOffer: OfferPreview) =>
  secondOffer.price - firstOffer.price;

const sortOffersByRatingDown = (firstOffer: OfferPreview, secondOffer: OfferPreview) =>
  secondOffer.rating - firstOffer.rating;


const sortOffers = (offers: OfferPreview[], sortingType: string | null): OfferPreview[] => {
  const sortedOffers = [...offers];
  switch (sortingType) {
    case SortingType.LowToHighPrice:
      return sortedOffers.sort(sortOffersByPriceUp);
    case SortingType.HighToLowPrice:
      return sortedOffers.sort(sortOffersByPriceDown);
    case SortingType.TopRated:
      return sortedOffers.sort(sortOffersByRatingDown);
    default:
      return sortedOffers;
  }
};

export { roundRating, getBigFirstLetter, getEnding, getOffersByCity, sortOffers };

