import { FC, useEffect, useMemo, useState } from 'react';
import { MovieType } from '../../types/MovieType';
import './MovieCard.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Link } from 'react-router-dom';
import { saveMovie, deleteMovie } from '../../app/Movies/movieSlice';

export const MovieCard: FC<MovieType> = ({ name, rating, countries, id, year, poster, data } ) => {
    
	const movies = useAppSelector(state => state.movies.value);
	const dispatch = useAppDispatch();

	async function handlePostMovie() {
		dispatch(saveMovie(data));
	}

	async function handleDeleteMovie() {
		dispatch(deleteMovie(data));
	}

	const [inSaved, setInSaved] = useState(false);

	function checkIsSaved(){
		const check = movies?.some(item => item.id === id);
		setInSaved(check);
	}

	useMemo(() => {
		checkIsSaved();
	}, [movies])

	return <li className='movie-card'>
		<img className='movie-card__image' src={poster?.url} alt={name}/>
		<Link to={`/movie/${id}`} className='movie-card__title'>
			{`${name ? name : data.alternativeName} ↗`}
		</Link>
		{!inSaved && <button className='movie-card__add-button'
		onClick={handlePostMovie}
		>Добавить в избранное</button>}
		{inSaved &&<button className='movie-card__add-button movie-card__add-button_type_delete'
		onClick={handleDeleteMovie}
		>Удалить из избранного</button>}
	</li>;
};
