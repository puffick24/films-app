import { Link } from 'react-router-dom';
import style from '../../../styles/Film.module.css'


const Film = ({film}) => {
    return ( 
        <li className={style.poster}>
            <img className={style.image} src = {film.poster} alt = "Poster"/> 
            <p className={style.title}>{film.title}</p>
            <p className={style.year}>{film.year}</p>
            <button className={style.info}><Link to= {`/FilmPage/${film.id}`}>Info</Link></button>
            <button className={style.remove}><Link to='#'>Remove</Link></button>
        </li>
     );
}

export default Film;