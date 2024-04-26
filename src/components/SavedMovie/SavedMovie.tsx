import React, { useEffect, useMemo, useState } from 'react';
import { MovieType } from '../../types/MovieType';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { productsIncrement, productsDecrement, productDelete } from '../../app/Movies/movieSlice';
import './SavedMovie.css';

function SavedMovie({ name,poster,rating,id}:MovieType) {

  const dispatch = useAppDispatch();

  // async function amountIncrement() {
  //   if(amount !== undefined &&  amount < 10) {
  //     dispatch(productsIncrement({id}));
  //   }
  // }

  // function amountDecrement() {
  //   if(amount !== undefined && amount > 1) {
  //     dispatch(productsDecrement({id}));
  //   }
  // }

  function deleteMovie() {
    // dispatch(delProduct(id));
  }

  // const totalPrice = Number.isInteger(price * 90) ? price * 90 : (price * 90).toFixed(2);

  return (
    <li className='saved-movie'>
        <img className='saved-movie__image' src={poster.url}></img>
        <div className='saved-movie__amount'>

        </div>
    </li>
  );
}

export default SavedMovie;
