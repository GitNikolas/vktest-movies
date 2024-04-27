import React, { useEffect, useMemo, useState } from 'react';
import './SavedMovies.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { MovieCard } from '../MovieCard';

function SavedMovies() {

    const movies = useAppSelector(state => state.movies.value);

    const dispatch = useAppDispatch();

  return (
    <section className='saved-movies'>
        <ul className='saved-movies__list list-style'>
          {movies.map(movie => 
              (<MovieCard
              key={movie.id}
              poster={movie.poster}
              rating={movie.rating}  
              id={movie.id}
              name={movie.name}
              countries={movie.countries}
              year={movie.year}
              data={movie}
              ></MovieCard>))}
        </ul>
    </section>
  );
}

export default SavedMovies;
