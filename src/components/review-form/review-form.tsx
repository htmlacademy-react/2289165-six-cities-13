import { useState, Fragment } from 'react';
import { MIN_LENGTH_COMMENT, MAX_LENGTH_COMMENT, DEFAULT_RATING } from '../../const';
import { useAppDispatch } from '../../hooks/index.ts';
import { postReviewAction, fetchReviewsAction } from '../../store/api-actions.ts';

const ratingTitlesForStars: { [key: string]: number } = {
  'terribly': 1,
  'badly': 2,
  'not bad': 3,
  'good': 4,
  'perfect': 5,
};

type ReviewFormProps = {
  offerId: string;
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(DEFAULT_RATING);
  let isDisabled = !(comment.length >= MIN_LENGTH_COMMENT &&
    comment.length <= MAX_LENGTH_COMMENT &&
    rating !== DEFAULT_RATING);

  const starClickHandle = (evt: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const newRating = ratingTitlesForStars[evt.currentTarget.title];
    setRating(newRating);
  };

  const formInputHandle = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setComment(value);
  };

  const resetFormHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    setComment('');
    setRating(DEFAULT_RATING);
    isDisabled = true;
    evt.currentTarget.reset();
  };

  const formSubmitHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction({ comment, rating, offerId }));
    dispatch(fetchReviewsAction(offerId));
    resetFormHandle(evt);
  };


  const ratingForm = (
    Object.entries(ratingTitlesForStars).map(([title, ratingStar]) => (
      <Fragment key={title}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={ratingStar}
          id={`${ratingStar}-stars`}
          type="radio"
          required
        />
        <label
          htmlFor={`${ratingStar}-stars`}
          className="reviews__rating-label form__rating-label"
          title={title}
          onClick={starClickHandle}
        >
          <svg
            className="form__star-image"
            width={37}
            height={33}
          >
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </Fragment >
    ))
      .reverse()
  );

  return (
    <form
      className="reviews__form form"
      action="#" method="post"
      onSubmit={formSubmitHandle}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingForm}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onInput={formInputHandle}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form >
  );
}

export { ReviewForm };
