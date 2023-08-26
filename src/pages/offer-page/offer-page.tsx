import { Reviews } from '../../components/reviews/reviews';
import { useParams } from 'react-router-dom';
import { OfferPreview } from '../../types';
import { MAX_OFFERS_PREVIEW } from '../../const';
import { roundRating, getBigFirstLetter, getEnding } from '../../utils';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFullOfferAction, fetchNearbyAction, fetchReviewsAction, setOfferFavoriteStatusAction } from '../../store/api-actions';
import { useEffect } from 'react';
import NotFoundPage from '../not-found-page/not-found-page';
import { useState } from 'react';


type PageParams = {
  id: string;
}

type OfferPageProps = {
  offers: OfferPreview[];
}

function OfferPage({ offers }: OfferPageProps): JSX.Element | null {

  const dispatch = useAppDispatch();

  const fullOfferId = String(useParams<PageParams>().id);

  useEffect(() => {
    dispatch(fetchFullOfferAction(fullOfferId));
    dispatch(fetchReviewsAction(fullOfferId));
    dispatch(fetchNearbyAction(fullOfferId));
  }, [dispatch, fullOfferId]);

  const fullOffer = useAppSelector((state) => state.fullOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearby = useAppSelector((state) => state.nearby);
  const [isFavoriteOffer, setFavoriteOffer] = useState<boolean>(fullOffer ? fullOffer.isFavorite : false);


  if (!fullOffer) {
    return <NotFoundPage />;
  }

  const {
    images,
    isPremium,
    rating,
    title,
    type,
    bedrooms,
    description,
    goods,
    host,
    maxAdults,
    price,
  } = fullOffer;


  const nearbyOffers = nearby.slice(0, MAX_OFFERS_PREVIEW);

  const selectedCityLocation = fullOffer.city.location;

  const offerPreview = offers.find((offer) => offer.id === fullOfferId);

  const nearbyOnMap = offerPreview ? [offerPreview, ...nearbyOffers] : nearbyOffers;

  const favoriteStatus = `${+!isFavoriteOffer}`;
  const id = fullOfferId;
  const favouriteButtonClickHandle = () => {
    dispatch(setOfferFavoriteStatusAction({ id, favoriteStatus }));
    setFavoriteOffer((prevState) => !prevState);

  };


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
      <Header />
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
                  className={`offer__bookmark-button button ${isFavoriteOffer ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={favouriteButtonClickHandle}
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
              <Reviews reviews={reviews} offerId={fullOfferId}/>
            </div>
          </div>
          <section className="offer__map map">
            <Map location={selectedCityLocation} offers={nearbyOnMap} selectedOfferId={fullOfferId} isMainScreen={false} />
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

