import React, { useEffect, useMemo, useState } from 'react';
import './SavedMovies.css';
import Product from '../SavedMovie/SavedMovie';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { fetchProducts } from '../../app/Product/movieSlice';

function SavedMovies() {

    const movies = useAppSelector(state => state.movies.value);

    const dispatch = useAppDispatch();

    useEffect(() => {
      // dispatch(fetchProducts());
    }, [dispatch])

  return (
    <section className='saved-movies'>
        {/* <ul className='saved-movies__list list-style'>
            {products?.map(product => 
            (<Product
            category = {product.category}
            description={product.description}
            key={product.id}
            image={product.image}
            price={product.price}
            rating={product.rating}
            title={product.title}    
            id={product.id}
            amount={product.amount}
            productData={product}
            ></Product>))}
        </ul> */}
    </section>
  );
}

export default SavedMovies;
