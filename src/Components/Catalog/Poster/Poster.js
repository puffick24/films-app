import style from '../../../styles/Poster.module.css'
import Film from '../Film/Film';

const Poster = ({films,loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <ul className={style.list}>
        <Film films={films} />
        </ul>
    )
}

export default Poster; 