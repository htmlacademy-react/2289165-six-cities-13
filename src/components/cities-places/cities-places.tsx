import { OfferPreview, Location } from '../../types.ts';
import OfferList from '../offer-list/offer-list.tsx';
import Map from '../../components/map/map';
import { useState } from 'react';
import { getEnding } from '../../utils.ts';
import Sorting from '../sorting/sorting.tsx';

type CitiesPLacesProps = {
  selectedCityByName: string;
  selectedCityLocation: Location;
  offersByCity: OfferPreview[];
};

function CitiesPlaces({ offersByCity, selectedCityByName, selectedCityLocation }: CitiesPLacesProps): JSX.Element {
  const offersCount = offersByCity.length;
  const [selectedOfferId, setSelectedOfferId] = useState<OfferPreview['id']>('');
  // const [selectedCity, setSelectedCity] = useState<OfferPreview['city']>(offers[0].city);

  const cardMouseEnterHandle = (id: OfferPreview['id']) => setSelectedOfferId(id);
  const cardMouseLeaveHandle = () => setSelectedOfferId('');

  if (offersCount > 1) {
    // const selectedOffer = offers.find((offer) => offer.city.name === selectedCityByName);
    // console.log(selectedOffer);

    return (
      <div className='cities__places-container container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>{offersCount} place{getEnding(offersCount)} to stay in {selectedCityByName}</b>
          <Sorting />
          <div className='cities__places-list places__list tabs__content'>
            <OfferList cardClass={'cities'} offers={offersByCity} cardMouseEnterHandle={cardMouseEnterHandle} cardMouseLeaveHandle={cardMouseLeaveHandle} />
          </div>
        </section>
        <div className='cities__right-section'>
          <section className='cities__map map'>
            <Map location={selectedCityLocation} offers={offersByCity} selectedOfferId={selectedOfferId} isMainScreen />
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
        </div>
      </section>
      <div className="cities__right-section">
      </div>
    </div>
  );
}

export default CitiesPlaces;
