import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Film.module.css'
import AltPoster from '../../../images/AltPoster.jpg'

const Film = ({film, getFilmIDHandle}) => {

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

Film.propTypes = {
    film: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      poster: PropTypes.string,
    }).isRequired,
    getFilmIDHandle: PropTypes.func.isRequired,
  };

export default Film;