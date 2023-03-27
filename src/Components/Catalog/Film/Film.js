import style from '../../../styles/Film.module.css'


const Film = ({film,i}) => {
    return ( 
        <li className={style.poster} key = {i}>
                <img className={style.image} src = {film.poster}/> 
                <p className={style.title}>{film.title}</p>
                <p className={style.year}>{film.year}</p>
                <button className={style.info}>Info</button>
                <button className={style.remove}>Remove</button>
            </li>
     );
}

export default Film; 