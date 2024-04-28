import React, {useEffect, useMemo} from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import { MoviePage } from './components/MoviePage';
import SavedMovies from './components/SavedMovies/SavedMovies';

function App() {

  return (
    <div className="app">
      <Header/>
      <div className='content'>
        <Routes>
          <Route
          path='/vktest-movies/'
          element={<Main />}
          />

          <Route
          path='/favorites'
          element={<SavedMovies />}
          />

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
