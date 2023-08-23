import { useState, Fragment } from 'react';
import { MIN_LENGTH_COMMENT, MAX_LENGTH_COMMENT, DEFAULT_RATING, AuthorizationStatus } from '../../const';

const ratingTitlesForStars: { [key: string]: number } = {
  'terribly': 1,
  'badly': 2,
  'not bad': 3,
  'good': 4,
  'perfect': 5,
};

type ReviewFormProps = {
  authorizationStatus: AuthorizationStatus;
}


function ReviewForm({authorizationStatus}: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState('');
  const [rating, setRating] = useState(DEFAULT_RATING);
  const isDisabled = !(formData.length >= MIN_LENGTH_COMMENT &&
    formData.length <= MAX_LENGTH_COMMENT &&
    rating !== DEFAULT_RATING);

  const starClickHandle = (evt: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const newRating = ratingTitlesForStars[evt.currentTarget.title];
    setRating(newRating);
  };

  const commentInputHandle = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setFormData(value);
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

  return (authorizationStatus === AuthorizationStatus.Auth
    ? (
      <form
        className="reviews__form form"
        action="#" method="post"
        onSubmit={(evt) => {
          evt.preventDefault();
        }}
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
          value={formData}
          onInput={commentInputHandle}
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
      </form>
    ) : (
      <div></div>
    ));
}

export { ReviewForm };
