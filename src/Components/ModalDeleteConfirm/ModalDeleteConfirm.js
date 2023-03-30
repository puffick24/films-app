import style from '../../styles/ModalDeleteConfirm.module.css'

import circle from '../../images/circle.svg'

const ModalDeleteConfirm = ({active,deleteFilm,setModalActive,filmID}) => {
    return ( 
        <div className={`${style.modal} ${active ? style.active : ''}`} onClick = {() => setModalActive(false)}>
            <div className={style.modal_content} onClick = {e => e.stopPropagation()}>
                <img src = {circle} alt = 'circle'></img>
                <h2>Are you sure ?</h2>
                <p>Do you really want to remove this movie?<br/>This process cannot be undone.</p>
                <div>
                    <button onClick = {() => setModalActive(false)} className={style.cancel}>Cancel</button>
                    <button onClick = { () => deleteFilm(filmID)}className={style.delete}>Delete</button>
                </div>
            </div>
        </div>
     );
}

export default ModalDeleteConfirm;