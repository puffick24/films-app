import style from './ModalDeleteConfirm.module.css'

import Сircle from '../../images/Circle'

const ModalDeleteConfirm = ({active,deleteFilm,setModalActive,filmID}) => {
    const setModalInactive = () => {
        setModalActive(false)
    }
    const deleteFilmHandle =() => {
        deleteFilm(filmID)
    }

    const setModalStyle = `${style.modal} ${active ? style.active : ''}`

    return ( 
        <div className={setModalStyle}>
            <div className={style.modal_content} >
                <Сircle/>
                <h2>Are you sure ?</h2>
                <p>Do you really want to remove this movie?<br/>This process cannot be undone.</p>
                <div>
                    <button onClick = {setModalInactive} className={style.cancel}>Cancel</button>
                    <button onClick = {deleteFilmHandle} className={style.delete}>Delete</button>
                </div>
            </div>
        </div>
     );
}

export default ModalDeleteConfirm;