import { OfferPreview } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import { getBigFirstLetter, roundRating } from '../../utils';


export type PlaceCardProps = OfferPreview & {
  cardClass: string;
  cardMouseEnterHandle?: (id: OfferPreview['id']) => void;
  cardMouseLeaveHandle?: () => void;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {
    price,
    type,
    title,
    previewImage,
    isFavorite,
    rating,
    id,
    isPremium,
    cardClass,
    cardMouseEnterHandle,
    cardMouseLeaveHandle
  } = props;

  const pathCard = `/offer/${id}`;

  return (
    <article
      className={`${cardClass}__card card place-card`}
      onMouseEnter={() => cardMouseEnterHandle?.(id)}
      onMouseLeave={() => cardMouseLeaveHandle?.()}
    >
      {isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>}
      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={pathCard}>
          <img
            className='place-card__image'
            src={previewImage}
            width={cardClass === 'cities' ? 260 : 150}
            height={cardClass === 'cities' ? 200 : 110}
            alt='Place image'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>
              &euro;{price}
            </b>
            <span className='place-card__price-text'>
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className={
              `place-card__bookmark-button ${isFavorite
                ? 'place-card__bookmark-button--active'
                : ''} button`
            }
            type='button'
          >
            <svg
              className='place-card__bookmark-icon'
              width={18}
              height={19}
            >
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>
              To bookmarks
            </span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${roundRating(rating)}%` }}></span>
            <span className='visually-hidden'>
              Rating
            </span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={pathCard}>
            {title}
          </Link>
        </h2>
        <p className='place-card__type'>{getBigFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
