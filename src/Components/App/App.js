import { Route, Routes } from 'react-router-dom';

import style from '../../styles/App.module.css'

import Header from '../Catalog/Header/Header';
import Main from '../Catalog/Main/Main';
import FilmPage from '../FilmPage/FilmPage'

const App = () => {

  return (
    <div className={style.App}>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/FilmPage/:id" element = { <FilmPage/> } />
      </Routes>
    </div>
  );
}

export default App;