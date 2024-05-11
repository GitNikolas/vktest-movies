import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Link, useLocation, Navigate, useNavigate, useMatch } from 'react-router-dom';
import { signOut } from '../../utils/usersApi/usersApi';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { clearUserValue } from '../../app/User/userSlice';

function Menu() {

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.user.value);

  function handleSignOut(){
    dispatch(clearUserValue());
    signOut();
    localStorage.clear();
  }

    return (
      <menu className="menu">
        <Link to='/vktest-movies/' className={`menu__link ${location.pathname === '/' && 'menu__link__current'}`}>Главная</Link>
        <Link to='/favorites' className={`menu__link ${location.pathname === '/basket' && 'menu__link__current'}`}>Избранное</Link>
      </menu>
      );
  }

export default Menu;
