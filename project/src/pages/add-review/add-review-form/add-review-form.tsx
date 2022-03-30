/* eslint-disable no-console */
import React, { useState, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RATING_VALUE } from '../../../const';
import { useDispatch } from 'react-redux';
import { addRatingAction } from '../../../store/action';
import { addNewReviewAction } from '../../../store/api-actions';

function AddReviewForm(): JSX.Element {
  const navigate = useNavigate();
  const [ ratingState, setRatingState] = useState(0);
  const [ reviewState, setReviewState] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();

  const setRatingInput = (ratingInput: number) => {
    setRatingState(ratingInput);
    dispatch(addRatingAction(ratingState));
  };

  const handleTextInput = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewState(target.value);
  };

  const addUserReview = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addNewReviewAction({id: Number(id), rating: ratingState, comment: reviewState}));
  };

  return (
    <div className="add-review">
      <form action='#' className='add-review__form' onSubmit={(evt) => {evt.preventDefault(); addUserReview(evt);  navigate(`/films/${id}`);} }>
        <div className='rating'>
          <div className='rating__stars'>

            {
              RATING_VALUE.map((item) => (
                <div key={item.value}>
                  <input className='rating__input' id={`star-${item.value}`} type='radio' name='rating' value={item.value} onChange={(evt) => setRatingInput(Number(evt.target.value))} checked={Math.round(ratingState) === item.value}/>
                  <label className='rating__label' htmlFor={`star-${item.value}`} >Rating `${item.value}` </label>
                </div>
              ))
            }

          </div>
        </div>

        <div className='add-review__text'>
          <textarea value={reviewState} className='add-review__textarea' name='review-text' id='review-text' placeholder='Review text' onChange={handleTextInput}>
          </textarea>
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit' disabled={reviewState.length < 50 || reviewState.length > 400 || !ratingState}>Post</button>
          </div>
        </div>
      </form>
    </div>);
}

export default AddReviewForm;
