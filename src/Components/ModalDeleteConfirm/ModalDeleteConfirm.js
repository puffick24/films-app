import style from './ModalDeleteConfirm.module.css'
import PropTypes from 'prop-types'

import Сircle from '../../images/Circle'
import { useDispatch } from 'react-redux'
import { addKeyAction, removeKeyAction } from '../store/KeysRemovingReducer'
import { addSnackStatusAction } from '../store/SnackbarReducer'

const ModalDeleteConfirm = ({active,setModalActive,filmID}) => {
    const dispatch = useDispatch()

    const setModalInactive = (id) => {
        removeDelKeys(id)
        setModalActive(false)
    }
    
    const deleteFilmHandle =() => {
        addDelKeys(filmID)
        dispatch(addSnackStatusAction({open: true}))
        setModalActive(false)
    }

    const addDelKeys = (id) => {
        dispatch(addKeyAction(id))
    }

    const removeDelKeys = (id) => {
        dispatch(removeKeyAction(id))
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

ModalDeleteConfirm.propTypes = {
    active: PropTypes.bool.isRequired,
    filmID: PropTypes.string.isRequired,
    setModalActive: PropTypes.func.isRequired
}

export default ModalDeleteConfirm;