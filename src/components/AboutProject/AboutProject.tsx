import { FC } from 'react';
import { AboutProjectProps } from '.';
import './AboutProject.css';
import me from '../../images/photo_2024-02-19_13-22-33.jpg';
import { Link } from 'react-router-dom';

export const AboutProject: FC<AboutProjectProps> = () => {
	return <section className='about-project'>
		<h2>Обо мне</h2>
		<div className='about-project__inform-table'>
			<img className='about-project__image' src={me} alt='Me'/>
			<div className='about-project__textarea'>
				<p className='about-project__text'>Привет! Меня зовут Николай, я frontend-разработчик.</p>
				<p className='about-project__text'>Разрабатываю SPA-приложения на React</p>
				<p className='about-project__text'>Pet-проект "Internet Shop" - это демо-версия интернет магазина.
				В проекте реализованы:</p>
				<ul className='about-project__list'>
					<li>Подгрузка данных с открытого api "Fake shop";</li>
					<li>Регистрация и авторизация;</li>
					<li>Валидация данных как на стороне клиента, так и на сервере;</li>
					<li>Возможность добавлять товар в корзину с сохранением за конкретным пользователем в базе даннных;</li>
					<li>Динамический роутинг;</li>
				</ul>	
				<p className='about-project__text'>Основные технологии: React, Redux, TypeScript.</p>
				<p className='about-project__text'>Бэкенд проекта написан на NodeJs-фреймворке Express и развёрнут на удалённм linux-сервере,
				 за хранение данных отвечает noSql-база данных MongoDB</p>


			</div>

		</div>
		<h3 className='about-project__title'>Контакты:</h3>
				<p className='about-project__link'>Email: panteleew.kolya@gmail.com
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
					<path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
					</svg>
				</p>
				<Link to={'https://t.me/pagedownone'} target='_blank' className='about-project__link'>Телеграм
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
					<path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"></path><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"></path>
					</svg>
				</Link>
				
				<Link to={'https://github.com/GitNikolas'} target='_blank' className='about-project__link'>GitHub
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 40 40">
					<path fill="#b6c9d6" d="M38.5,20c0,10.299-8.391,18.5-18.5,18.5C9.892,38.5,1.5,30.299,1.5,20S9.701,1.5,20,1.5 S38.5,9.701,38.5,20z"></path><path fill="#fff" d="M33.171,19.24c0,2.306-1.191,5.51-3.148,7.102c-1.582,1.289-3.672,1.695-6.034,1.823 c0.888,0.539,1.479,1.515,1.479,2.629v7.636C23.979,38.8,22.429,39,20.832,39c-1.582,0-3.127-0.195-4.606-0.565v-5.017 c-0.642,0.2-1.484,0.318-2.568,0.262c-3.595-0.19-4.108-2.372-4.683-3.913c-0.58-1.541-2.378-1.736-2.121-2.372 c1.241-0.426,2.215-0.02,2.874,0.482c0.523,0.398,0.887,0.961,1.131,1.571c0.279,0.697,1.02,1.86,2.86,1.86 c1.299,0,2.069-0.303,2.511-0.601c0.026-1.089,0.621-2.033,1.494-2.552c-2.506-0.159-4.704-0.632-6.321-2.039 c-1.797-1.561-2.881-4.678-2.881-6.876c0-1.833,0.755-4.093,2.049-5.515c0.041-0.041,0.077-0.087,0.128-0.128 c-0.298-0.894-0.642-2.66,0.195-4.822c2.49-0.046,4.457,1.315,5.258,1.972c1.448-0.334,3.03-0.493,4.694-0.493 c1.705,0,3.333,0.149,4.806,0.493c0.801-0.657,2.773-2.018,5.258-1.967c0.873,2.249,0.467,4.072,0.164,4.925 C32.401,15.229,33.171,17.391,33.171,19.24z"></path><path fill="#788b9c" d="M20,39C9.523,39,1,30.477,1,20C1,9.346,9.346,1,20,1s19,8.346,19,19C39,30.477,30.477,39,20,39z M20,2C9.907,2,2,9.907,2,20c0,9.925,8.075,18,18,18s18-8.075,18-18C38,9.907,30.093,2,20,2z"></path>
					</svg>
				</Link>
	</section>;
};