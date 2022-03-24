/* eslint-disable no-console */
import React from 'react';
import { useState, createRef, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { RATING_VALUE } from '../../const';
import { useDispatch } from 'react-redux';
import { addRatingAction, addReviewAction } from '../../store/action';
import { addNewReviewAction } from '../../store/api-actions';

function AddReviewForm(): JSX.Element {
  const newReviewElement: React.RefObject<HTMLInputElement>  = createRef();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { addRating, addReview} = useAppSelector((state) => state);

  let reviewText = null;

  const setRatingInput = (ratingInput: number) => {
    dispatch(addRatingAction(ratingInput));
  };

  const addUserReview = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();

    if (newReviewElement.current !== null) {
      reviewText = newReviewElement.current.value;
      dispatch(addReviewAction(reviewText));
    }

    addNewReviewAction(id, addRating, addReview);
  };

  return (
    <div className="add-review">
      <form action='#' className='add-review__form'>
        <div className='rating'>
          <div className='rating__stars'>

            {
              RATING_VALUE.map((item) => (
                <div key={item.value}>
                  <input className='rating__input' id={`star-${item.value}`} type='radio' name='rating' value={item.value} onChange={(evt) => setRatingInput(Number(evt.target.value))}/>
                  <label className='rating__label' htmlFor={`star-${item.value}`} >Rating `${item.value}` </label>
                </div>
              ))
            }

          </div>
        </div>

        <div className='add-review__text'>
          <textarea ref={newReviewElement} className='add-review__textarea' name='review-text' id='review-text' placeholder='Review text' >
          </textarea>
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit' onClick={addUserReview} disabled = {reviewText.length < 50 || reviewText.length > 400}>Post</button>
          </div>
        </div>
      </form>
    </div>);
}

export default AddReviewForm;
