import style from './ModalDeleteConfirm.module.css'

import Сircle from '../../images/Circle'
import { useDispatch } from 'react-redux'

const ModalDeleteConfirm = ({active,setModalActive,filmID}) => {
    const setModalInactive = (id) => {
        removeDelKeys(id)
        setModalActive(false)
    }
    const deleteFilmHandle =() => {
        addDelKeys(filmID)
        setModalActive(false)
    }

    const dispatch = useDispatch()

    const addDelKeys = (id) => {
        dispatch({type : "ADD_KEY", payload: id})
    }

    const removeDelKeys = (id) => {
        dispatch({type : "REMOVE_KEY", payload: id})
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