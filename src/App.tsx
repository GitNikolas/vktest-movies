import React, {useEffect, useMemo} from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import Basket from './components/SavedMovies/SavedMovies';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Profile } from './components/Profile';
import Catalog from './components/Catalog/Catalog';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UseAuthorization } from './hooks/UseForm/UseAuthorization';
import { MoviePage } from './components/MoviePage';
import { AboutProject } from './components/AboutProject';
import { getMovies } from './utils/moviesApi/moviesApi';
import SavedMovies from './components/SavedMovies/SavedMovies';

function App() {

  return (
    <div className="app">
      <Header/>
      <div className='content'>
        <Routes>
          <Route
          path='/'
          element={<Main />}
          />

          <Route
          path='/favorites'
          element={<SavedMovies />}
          />

          {/* <Route
          path='/sign-up'
          element={<Registration />}
          />

          <Route
          path='/sign-in'
          element={<Login />}
          />

          <Route
          path='/catalog'
          element={<Catalog />}
          />

          <Route 
          path='/profile'
          element={
            <ProtectedRoute 
            component={Profile}
            />
          }
          />

          <Route 
          path='/about-project'
          element={<AboutProject />}
          /> */}

          <Route
          path='/movie/:id'
          element={<MoviePage />}
          />

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
