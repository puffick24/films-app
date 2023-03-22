import style from '../../../styles/Poster.module.css'

const Poster = ({films,loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }






    

    return(
        <ul className={style.list}>
            <li className={style.poster}>               
                <img className={style.image} src = {films.Poster}/> 
                <p className={style.title}>{films.Title}</p>
                <p className={style.year}>{films.Year}</p>                         
            </li>
            <li className={style.poster}>               
                <img className={style.image} src = {films.Poster}/> 
                <p className={style.title}>{films.Title}</p>
                <p className={style.year}>{films.Year}</p>                         
            </li>
            <li className={style.poster}>               
                <img className={style.image} src = {films.Poster}/> 
                <p className={style.title}>{films.Title}</p>
                <p className={style.year}>{films.Year}</p>                         
            </li>
            <li className={style.poster}>               
                <img className={style.image} src = {films.Poster}/> 
                <p className={style.title}>{films.Title}</p>
                <p className={style.year}>{films.Year}</p>                         
            </li>
        </ul>
    )
}

export default Poster; 