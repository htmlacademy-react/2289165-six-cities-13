import { OfferPreview } from '../../mocks/offers';
import { Link } from 'react-router-dom';

export type PlaceCardFavouriteProps = OfferPreview;

function PlaceCardFavourite(props: PlaceCardFavouriteProps): JSX.Element {
  const {
    price,
    type,
    title,
    previewImage,
    isFavorite,
    rating,
    id,
    isPremium,
  } = props;

  const RATING_STARS = 5;
  const ratingWidth = window.Math.round(rating) * 100 / RATING_STARS;
  const pathCard = `/offer/${id}`;

  return (
    <article className="favorites__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={pathCard}>
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite
              ? 'place-card__bookmark-button--active'
              : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              In bookmarks
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }} />
            <span className="visually-hidden">
              Rating
            </span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={pathCard}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>
  );
}

export default PlaceCardFavourite;
