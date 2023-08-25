import { ReviewForm } from '../review-form/review-form';
import { ReviewsItem } from '../reviews-item/reviews-item';
import { Review } from '../../types';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';

type ReviewsProps = {
  reviews: Review[];
  offerId: string;
}

function Reviews({ reviews, offerId }: ReviewsProps): JSX.Element {

  const isAuthorized = useAppSelector(
    (state) => state.authorizationStatus
  ) === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews  <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews.length !== 0 &&
      <ul className="reviews__list">
        {reviews.map((oneReview) => <ReviewsItem key={oneReview.id} review={oneReview} />)}
      </ul>}

      {isAuthorized && <ReviewForm offerId={offerId}/>}

    </section>
  );
}

export { Reviews };

