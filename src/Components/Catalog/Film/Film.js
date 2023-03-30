import { Link } from 'react-router-dom';

import style from '../../../styles/Film.module.css'

const Film = ({film,setModalActive,setFilmID}) => {

    return ( 
        <li className={style.poster}>
            <img className={style.image} src = {film.poster} alt = "Poster"/> 
            <p className={style.title}>{film.title}</p>
            <p className={style.year}>{film.year}</p>
            <Link to= {`/FilmPage/${film.id}`} className={style.info}>Info</Link>
            <button className={style.remove} onClick={() => {setModalActive(true); setFilmID(film.id)}}>Remove</button>
        </li>
     );     
}

export default Film;