import { ReviewForm } from '../review-form/review-form';
import { ReviewsItem } from '../reviews-item/reviews-item';
import { Review } from '../../mocks/review';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews  <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((oneReview) => <ReviewsItem key={oneReview.id} review={oneReview} />)}
      </ul>

      <ReviewForm />

    </section>
  );
}

export { Reviews };
