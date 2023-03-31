import {useState} from "react"
import style from '../../../styles/FilmsList.module.css'

import Film from '../Film/Film';
import ModalDeleteConfirm from '../../ModalDeleteConfirm/ModalDeleteConfirm';

const FilmsList = ({films,loading,setDelKeys}) => {
    const [active,setModalActive] = useState(false)
    const [filmID,setFilmID] = useState('')

    const deleteFilm = (id) =>{
        setDelKeys(id)
        setModalActive(false)       
    }


    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <ul className={style.list}>
            {
                films.map((film, i) => (
                    <Film 
                    film = {film}
                    key = {i}
                    setModalActive = {setModalActive}
                    setFilmID = {setFilmID}
                    />
                ))
            }
            <ModalDeleteConfirm active = {active} setModalActive = {setModalActive} deleteFilm = {deleteFilm} filmID = {filmID}/>
        </ul>
    )
}

export default FilmsList; 