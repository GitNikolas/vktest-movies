import React, {useEffect, useMemo, useState} from 'react';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../../types/MovieType';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getMovies } from '../../utils/moviesApi/moviesApi';
import './Main.css';
import testing from './testing.json';
import { UsePagination } from '../../hooks/UsePagination/UsePagination';

function Main() {


  const currentPage = (pageNumber:number) => pageNumber === page ? 'main__pagelist-button_type_current' : '';
  const [movies, setMovies] = useState<MovieType[]>([]);
  const dispatch = useAppDispatch();

  const {page, setPage, pages, totalPages, setTotalPages, prevPagesClick, nextPagesClick, setDefaultPages} = UsePagination();

  useMemo(async() => {
    let res = await getMovies(page);
    let data = await res.json();
    let pagesArr = [...Array(data.pages)].map((_, i) => i + 1);
    setTotalPages(pagesArr);
    setMovies(data.docs);
  }, [page]);

  return (
    <main className="main">
      <div className="main__pagelist">
        <button onClick={setDefaultPages} className="main__pagelist-button" style={{width: 80 }}>В начало</button>
        <button className="main__pagelist-button" onClick={prevPagesClick}>{` < `}</button>
        {pages.map(pageNumber => <button key={pageNumber} onClick={() => setPage(pageNumber)} className={`main__pagelist-button ${currentPage(pageNumber)}`}>{pageNumber}</button>)}
        <button className="main__pagelist-button" onClick={nextPagesClick}>{` > `}</button>
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
