import { Link } from 'react-router-dom';

import style from './Film.module.css'
import AltPoster from '../../../images/AltPoster.jpg'

const Film = ({film,getFilmIDHandle}) => {

    const getID = () => {
        getFilmIDHandle(film.id)
    }

    return ( 
        <li className={style.poster}>
            {
                film.poster ? <img className={style.image} src = {film.poster} alt = "Poster"/>
                :
                <img className={style.image} src = {AltPoster} alt = "Poster"/>
            }
            <p className={style.title}>{film.title}</p>
            <p className={style.year}>{film.year}</p>
            <Link to= {`/FilmPage/${film.id}`} className={style.info}>Info</Link>
            <button className={style.remove} onClick={getID}>Remove</button>
        </li>
     );     
}

export default Film;