import style from '../../../styles/FilmsList.module.css'
import Film from '../Film/Film';

const FilmsList = ({films,loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <ul className={style.list}>
            {
                films.map((film,i) => (
                    <Film 
                    film = {film}
                    i = {i}
                    />
                ))
            }
        </ul>
    )
}

export default FilmsList; 