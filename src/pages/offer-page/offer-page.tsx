import { Reviews } from '../../components/reviews/reviews';
import { Review } from '../../mocks/review';
import { Navigate, useParams } from 'react-router-dom';
import { OfferFull, OfferPreview } from '../../mocks/offers';
import { AppRoute, AuthorizationStatus, MAX_OFFERS_PREVIEW } from '../../const';
import { roundRating, getBigFirstLetter, getEnding } from '../../utils';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';

type PageParams = {
  id: string;
}

type OfferPageProps = {
  offers: OfferFull[];
  someOffers: OfferPreview[];
  reviews: Review[];
}

function OfferPage({ someOffers, offers, reviews}: OfferPageProps): JSX.Element {


  const { id } = useParams<PageParams>();
  const offerPage = offers.find((offer) => offer.id === id);

  if (!offerPage) {
    return <Navigate to={AppRoute.MainPage} replace/>;
  }

  if (!id) {
    return <Navigate to={AppRoute.MainPage} replace />;
  }

  const selectedCityLocation = offerPage.city.location;
  //nearbyOffers будет приходить с сервера по id выбранного offer
  const nearbyOffers = someOffers.slice(0, MAX_OFFERS_PREVIEW);
  const offerPreview = someOffers.find((offer) => offer.id === id);
  const someOffersOnMap = offerPreview ? [offerPreview, ...someOffers] : someOffers;


  const {
    images,
    isPremium,
    isFavorite,
    rating,
    title,
    type,
    bedrooms,
    description,
    goods,
    host,
    maxAdults,
    price,
  } = offerPage;


  const offerImages = (
    <div className="offer__gallery">
      {images.map((image) => (
        <div
          key={image}
          className="offer__image-wrapper"
        >
          <img
            className="offer__image"
            src={image}
            alt="Photo studio"
          />
        </div>
      ))}
    </div>
  );

  const offerGoods = (
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <li
          key={good}
          className="offer__inside-item"
        >
          {good}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="page">
      <Header authorizationStatus={AuthorizationStatus.Auth} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            {offerImages}
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button
                  className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                >
                  <svg
                    className="offer__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${roundRating(rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{getBigFirstLetter(type)}</li>
                <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedroom{getEnding(bedrooms)}</li>
                <li className="offer__feature offer__feature--adults">Max {maxAdults} Adult{getEnding(maxAdults)}</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {offerGoods}
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews reviews={reviews} />
            </div>
          </div>
          <section className="offer__map map">
            <Map location={selectedCityLocation} offers={someOffersOnMap} selectedOfferId={id} isMainScreen={false}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList
                cardClass={'near-places'}
                offers={nearbyOffers}
              />
            </div>
          </section>
        </div>
      </main>
    </div >
  );
}

export default OfferPage;

