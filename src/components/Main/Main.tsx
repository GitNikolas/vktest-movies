import React, {useEffect, useMemo, useState} from 'react';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../../types/MovieType';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUserMovies } from '../../app/Movies/movieSlice';
import { getMovies } from '../../utils/moviesApi/moviesApi';
import './Main.css';

function Main() {

  const [movies, setMovies] = useState<MovieType[]>([]);
  const dispatch = useAppDispatch();

  useMemo(async() => {
    dispatch(fetchUserMovies());
  }, [])

  // useMemo(async() => {
  //   let res = await getMovies();
  //   let data = await res.json();
  //   setMovies(data.docs);
  //   console.log(data);
  // }, [])

  return (
    <main className="main">
      <ul className="main__product-list list-style">
      {movies.map(movie => 
            (<MovieCard
            key={movie.id}
            poster={movie.poster}
            rating={movie.rating}  
            id={movie.id}
            name={movie.name}
            countries={movie.countries}
            year={movie.year}
            ></MovieCard>))}
      </ul>
    </main>
  );
}

export default Main;
