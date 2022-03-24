import dayjs from 'dayjs';
import { Review } from '../../../types/review';

type ReviewItemProps = {
  review: Review;
};

const getDate = (date: string) => {
  const newDate = dayjs(date).format('MMMM DD, YYYY');
  return newDate;
};

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>{getDate(review.date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default ReviewItem;
