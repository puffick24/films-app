import { Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addSnackStatusAction } from "../store/SnackbarReducer";

const SnackbarComponent = ({open}) => {
    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(addSnackStatusAction(false,'',''))
    }

    const severity = useSelector(state => state.snackbars.severity)
    const message = useSelector(state => state.snackbars.message)

    return (
        <Snackbar open = {open} autoHideDuration={3000} onClose={onClose} anchorOrigin = {{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert onClose={onClose} severity = {severity}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default SnackbarComponent;