import { FavouriteOffer, OfferPreview } from '../../types.ts';
import PlaceCard from '../place-card/place-card.tsx';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

type FavouriteOffersProps = {
  favouriteData: FavouriteOffer[];
};

function FavouriteOffers({ favouriteData }: FavouriteOffersProps): JSX.Element {
  const favouritesByCity: {
    [key: string]: OfferPreview[];
  } = {};

  favouriteData.forEach((offer: OfferPreview) => {
    if (!(offer.city.name in favouritesByCity)) {
      favouritesByCity[offer.city.name] = [];
    }
    favouritesByCity[offer.city.name].push(offer);
  });

  const favouritesList = Object.entries(favouritesByCity).map((item: [string, OfferPreview[]]) => {
    const [cityName, cards] = item;

    const placesList = (
      <div className="favorites__places">
        {cards.map((card) => (
          <PlaceCard
            key={card.id} cardClass={'favorites'} {...card}
          />
        ))}
      </div>
    );

    return (
      <li
        key={cityName}
        className="favorites__locations-items"
      >
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to={AppRoute.MainPage}
            >
              <span>{cityName}</span>
            </Link>
          </div>
        </div>
        {placesList}
      </li>
    );
  });

  if (favouriteData.length >= 1) {
    return (
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {favouritesList}
            </ul>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default FavouriteOffers;
