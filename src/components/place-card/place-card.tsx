import { OfferPreview } from '../../types';
import { Link } from 'react-router-dom';
import { CardClass } from '../../types';
import { roundRating, getBigFirstLetter } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setOfferFavoriteStatusAction } from '../../store/api-actions';
import { useState } from 'react';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';

export type PlaceCardProps = OfferPreview & {
  cardClass: CardClass;
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

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const [isFavoriteOffer, setFavoriteOffer] = useState<boolean>(isFavorite);
  const favoriteStatus = `${+!isFavoriteOffer}`;

  const favouriteButtonClickHandle = async (): Promise<void> => {
    if (authorizationStatus !== 'AUTH') {
      browserHistory.push(AppRoute.LoginPage);
      return;
    }

    await dispatch(setOfferFavoriteStatusAction({ id, favoriteStatus }));
    setFavoriteOffer((prevState) => !prevState);
    // await dispatch(fetchOffersAction());

    console.log(favoriteStatus);
  };
  ///

  ///
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
            width={cardClass === 'favorites' ? 150 : 260}
            height={cardClass === 'favorites' ? 110 : 200}
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
            className={`place-card__bookmark-button ${isFavoriteOffer
              ? 'place-card__bookmark-button--active'
              : ''} button`}
            type='button'
            onClick={favouriteButtonClickHandle}
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
