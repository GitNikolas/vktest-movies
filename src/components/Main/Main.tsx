import React, {useEffect, useMemo, useState} from 'react';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../../types/MovieType';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getMovies } from '../../utils/moviesApi/moviesApi';
import './Main.css';
import testing from './testing.json';

function Main() {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState([1,2,3,4,5,6,7,8,9,10]);
  const currentPage = (pageNumber:number) => pageNumber === page ? 'main__pagelist-button_type_current' : '';
  const [movies, setMovies] = useState<MovieType[]>([]);
  const dispatch = useAppDispatch();

  useMemo(async() => {
    // let res = await getMovies(page);
    // let data = await res.json();

		// @ts-ignore
    setMovies(testing);
    // console.log(data);
  }, [page])

  // function (){

  // }

  return (
    <main className="main">
      <div className="main__pagelist">
        <button className="main__pagelist-button">{` < `}</button>
        {totalPages.map(pageNumber => <button key={pageNumber} className={`main__pagelist-button ${currentPage(pageNumber)}`}>{pageNumber}</button>)}
        <button className="main__pagelist-button">{` > `}</button>
      </div>
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
            data={movie}
            ></MovieCard>))}
      </ul>
    </main>
  );
}

export default Main;
