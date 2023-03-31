import style from '../../styles/ModalDeleteConfirm.module.css'

import circle from '../../images/circle.svg'

const ModalDeleteConfirm = ({active,deleteFilm,setModalActive,filmID}) => {
    const setModalInactive = () => {
        setModalActive(false)
    }
    const deleteFilmHandle =() => {
        deleteFilm(filmID)
    }
    const stopPropagationHandle = (e) => {
        e.stopPropagation()
    }

    return ( 
        <div className={`${style.modal} ${active ? style.active : ''}`} onClick = {setModalInactive}>
            <div className={style.modal_content} onClick = {stopPropagationHandle}>
                <img src = {circle} alt = 'circle'></img>
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