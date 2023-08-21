import { OfferPreview } from '../../mocks/offers.ts';
import OfferList from '../offer-list/offer-list.tsx';

type CitiesPLacesProps = {
  offers: OfferPreview[];
};

function CitiesPlaces({ offers }: CitiesPLacesProps): JSX.Element {
  const offersCount = offers.length;

  if (offersCount > 1) {
    return (
      <div className='cities__places-container container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>{offersCount} places to stay in Amsterdam</b>
          <form className='places__sorting' action='#' method='get'>
            <span className='places__sorting-caption'>Sort by</span>
            <span className='places__sorting-type' tabIndex={0}>
              Popular
              <svg className='places__sorting-arrow' width='7' height='4'>
                <use xlinkHref='#icon-arrow-select'></use>
              </svg>
            </span>
            <ul className='places__options places__options--custom places__options--opened'>
              <li className='places__option places__option--active' tabIndex={0}>Popular</li>
              <li className='places__option' tabIndex={0}>Price: low to high</li>
              <li className='places__option' tabIndex={0}>Price: high to low</li>
              <li className='places__option' tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className='cities__places-list places__list tabs__content'>
            <OfferList offers={offers} />
          </div>
        </section>
        <div className='cities__right-section'>
          <section className='cities__map map'></section>
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
        <img src="../../img/no-places@2x.png" ></img>
      </div>
    </div>
  );
}

export default CitiesPlaces;
