import { FC, useEffect, useMemo, useState } from 'react';
import { MoviePageProps } from '.';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUserMovies } from '../../app/Movies/movieSlice';
import { MovieType } from '../../types/MovieType';
import Loader from '../UI/Spinner/Loader';
import './MoviePage.css'

export const MoviePage: FC<MoviePageProps> = (props) => {

	const { id } = useParams();
	const movies = useAppSelector(state => state.movies.value);
	const dispatch = useAppDispatch();
	const [ movieData, setMovieData ] = useState<MovieType | null >(null);
	const [ inSaved, setInSaved ] = useState(false);

	// function checkIsInSaved(){
	// 	if(movieData && movies) {
	// 		let check = movies.some(item => item.id === movieData.id);
	// 		let elementFromBusket = movies.filter(item => item.id === movieData.id)[0];
	// 		setAmountInBusket(elementFromBusket?.amount);
	// 		setInBusket(check);
	// 	}
	// }

	useMemo(async() => {
		dispatch(fetchUserMovies());
		// let res = await fetch(`https://fakestoreapi.com/products/${id}`);
		// let data = await res.json();
		// setMovieData(data);
	}, [])

	// useEffect(() => {
	// 	checkIsInSaved();
	// }, [movies, movieData])

	return (
	movieData
	?
	<div className='movie-page'>
		{/* <img className='movie-page__image' src={movieData.image} alt={movieData.title}/> */}

		{/* <div className='movie-page__content'>
			<p className='movie-page__title'>{productData.title}</p>
			<p>{movieData.description}</p>
			<p> Рейтинг: {movieData.rating.rate}</p>
			{!inBusket && <button className='movie-page__add-button'
			// onClick={handlePostProduct}
			>Добавить в избранное</button>}
			{inBusket &&<button className='movie-page__add-button'
			// onClick={handleDeleteProduct}
			>Удалить из избранного</button>}
		</div> */}

	</div>	
	:
	<Loader />
);
};
