import { FavouriteOffer } from '../../mocks/favourite';
import { OfferPreview } from '../../mocks/offers';
import PlaceCardFavourite from '../../components/place-card-favourite/place-card-favourite';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

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
          <PlaceCardFavourite
            key={card.id} {...card}
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
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Link className='header__logo-link' to={AppRoute.MainPage}>
                <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width={81} height={41} />
              </Link>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a className='header__nav-link header__nav-link--profile' href='#'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'>
                    </div>
                    <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                    <span className='header__favorite-count'>3</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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

