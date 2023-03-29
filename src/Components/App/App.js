import { Route, Routes } from 'react-router-dom';

import style from '../../styles/App.module.css'

import Header from '../Catalog/Header/Header';
import Main from '../Catalog/Main/Main';
import FilmPage from '../FilmPage/FilmPage'
import NotFoundPage from '../NotFoundPage/NotFoundPage'

const App = () => {

  return (
    <div className={style.App}>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/FilmPage/:id" element = { <FilmPage/> } />
        <Route path = "/*" element = { <NotFoundPage/> }></Route>
      </Routes>
    </div>
  );
}

export default App;