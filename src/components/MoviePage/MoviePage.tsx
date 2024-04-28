import { FC, useEffect, useMemo, useState } from 'react';
import { MoviePageProps } from '.';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MovieType } from '../../types/MovieType';
import Loader from '../UI/Spinner/Loader';
import './MoviePage.css'
import { getMoviesById, getSimilarMovies } from '../../utils/moviesApi/moviesApi';
import { saveMovie, deleteMovie } from '../../app/Movies/movieSlice';
import { Link } from 'react-router-dom';
import test from './test.json';
import test2 from './test2.json';

export const MoviePage: FC<MoviePageProps> = (props) => {

	const { id } = useParams();
	const movies = useAppSelector(state => state.movies.value);
	const dispatch = useAppDispatch();
	const [ movieData, setMovieData ] = useState<MovieType | null >(null);
	const [ similarMovies, setSimilarMovies ] = useState<MovieType[]>([]);
	const [ inSaved, setInSaved ] = useState(false);
	const genres = movieData?.genres?.map((item) => ` ${item.name}`).toString();

	function checkIsInSaved(){
		if(movieData && movies) {
			let check = movies.some(item => item.id === movieData.id);
			setInSaved(check);
		}
	}

	function handlePostMovie(){
		dispatch(saveMovie(movieData));
	}

	function handleDeleteMovie(){
		dispatch(deleteMovie(movieData));
	}

	useMemo(async() => {
		let res = await getMoviesById(id);
		let data = await res.json();
		setMovieData(data);
		let similarRes = await getSimilarMovies(data.id);
		let similarData = await similarRes.json();
		similarData = similarData.docs.filter((movie:MovieType) => movie.id !== data.id);
		setSimilarMovies(similarData);
	}, [])

	useEffect(() => {
		checkIsInSaved();
	}, [movies, movieData])

	return (
	movieData
	?
	<div className='movie-page'>

		<div className='movie-page__content'>
			<img className='movie-page__image' src={movieData.poster.url} alt={movieData.name}/>
			<div>
				<p className='movie-page__title'>{movieData.name} ({movieData.year})</p>
				<p className='movie-page__title'>Длительность: {movieData.movieLength} мин.</p>
				<p className='movie-page__title'>Жанр: {genres}.</p>
				<p>{movieData.description}</p>
				<p> Рейтинг IMDB: {movieData.rating.imdb}</p>
				{!inSaved && <button className='movie-page__add-button'
				onClick={handlePostMovie}
				>Добавить в избранное</button>}
				{inSaved &&<button className='movie-page__add-button'
				onClick={handleDeleteMovie}
				>Удалить из избранного</button>}
			</div>

		</div>

		<h4>Похожие фильмы</h4>

		<ul className='similar-movies list-style'>
		{ similarMovies.map(movie => <li key={movie.id}>
			<Link to={`/movie/${movie.id}`} className='similar-movies__link' target='_blank'>
				<img
				src={movie.poster.url}
				alt={movie.name}
				className='similar-movies__poster'></img>
				<p>{movie.name}</p>
			</Link>
		</li>) }
		</ul>

	</div>	
	:
	<Loader />
);
};
