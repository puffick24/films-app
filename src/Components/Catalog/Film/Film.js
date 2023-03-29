import { Link } from 'react-router-dom';
import style from '../../../styles/Film.module.css'


const Film = ({film}) => {
    return ( 
        <li className={style.poster}>
            <img className={style.image} src = {film.poster} alt = "Poster"/> 
            <p className={style.title}>{film.title}</p>
            <p className={style.year}>{film.year}</p>
            <Link to= {`/FilmPage/${film.id}`} className={style.info}>Info</Link>
            <Link to='/remove' className={style.remove}>Remove</Link>
        </li>
     );
}

export default Film;