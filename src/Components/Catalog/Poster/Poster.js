import style from '../../../styles/Poster.module.css'

const Poster = ({films,loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <ul className={style.list}>
            {
                films.map((film,i) => (
                    <li className={style.poster} key = {i}>
                        <img className={style.image} src = {film.Poster}/> 
                        <p className={style.title}>{film.Title}</p>
                        <p className={style.year}>{film.Year}</p>
                        <button className={style.info}>Info</button>
                        <button className={style.remove}>Remove</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default Poster; 