import { FavouriteOffer } from '../../mocks/favourite';
import { OfferPreview } from '../../mocks/offers';
import PlaceCard from '../../components/place-card/place-card';
import Header from '../../components/header/header';

type FavouriteProps = {
  favouriteData: FavouriteOffer[];
}

function FavouritesPage({ favouriteData }: FavouriteProps): JSX.Element {

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
            <a
              className="locations__item-link"
              href="#"
            >
              <span>{cityName}</span>
            </a>
          </div>
        </div>
        {placesList}
      </li>
    );
  });

  return (
    <div className='page'>
      <Header />

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
      <footer className='footer container'>
        <a className='footer__logo-link' href='main.html'>
          <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33' />
        </a>
      </footer>
    </div>
  );
}

export default FavouritesPage;

