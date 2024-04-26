import { FC, useEffect, useMemo, useState } from 'react';
import { MovieType } from '../../types/MovieType';
import './MovieCard.css';
import { postProduct, deleteProduct } from '../../utils/productsApi/productsApi';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { fetchProducts,pstProduct,delProduct } from '../../app/Product/productsSlice';
import { ProductImagePopup } from '../Popups/ProductImagePopup';
import { Link } from 'react-router-dom';

export const MovieCard: FC<MovieType> = ({ name, rating, countries, id, year, poster }) => {
    
	// const products = useAppSelector(state => state.products.value);
	// const dispatch = useAppDispatch();

	async function handlePostProduct() {
		// dispatch(pstProduct(productData));
	}

	async function handleDeleteProduct() {
		// dispatch(delProduct(id));
	}

	function toggleImageOpen() {
		// setImageIsOpen(!imageIsOpen);
	}

	const [inSaved, setInSaved] = useState(false);

	// function checkIsInBusket(){
	// 	const check = products?.some(item => item.id === id);
	// 	setInBusket(check);
	// }

	// useMemo(() => {
	// 	checkIsInBusket();
	// }, [products])

	return <li className='product-mini'>
		<img className='product-mini__image' src={poster.url} alt={name} onClick={toggleImageOpen}/>
		<Link to={`/movie/${id}`} className='product-mini__title' target='_blank'>{`${name} ↗`}</Link>
		{!inSaved && <button className='product-mini__add-button'
		onClick={handlePostProduct}
		>Добавить в избранное</button>}
		{inSaved &&<button className='product-mini__add-button'
		onClick={handleDeleteProduct}
		>Удалить из избранного</button>}
		{/* <ProductImagePopup image={image} openImage={imageIsOpen} toggleImageOpen={toggleImageOpen}/> */}
	</li>;
};
