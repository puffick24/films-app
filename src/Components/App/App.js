import React, { StrictMode } from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import style from './App.module.css'

import Header from '../Catalog/Header';
import Main from '../Catalog/Main';
import FilmPage from '../FilmPage'
import NotFoundPage from '../NotFoundPage'

const App = () => {

  return (
    <StrictMode>
      <BrowserRouter>
        <div className={style.App}>
          <Header/>
          <Routes>
            <Route path = "/" element = {<Main/>}/>
            <Route path = "/FilmPage/:id" element = { <FilmPage/> } />
            <Route path = "/*" element = { <NotFoundPage/>} />            
          </Routes>
        </div>
      </BrowserRouter>    
    </StrictMode>     
  );
}

export default App;