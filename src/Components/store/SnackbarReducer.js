const defaultState = {
    open: false,
    severity: '',
    message: ''
}

const ADD_STATUS = "ADD_STATUS"
const GET_STATUS = "GET_STATUS"

export const SnackbarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_STATUS:
            return {...state, open: action.payload.open, severity: action.payload.severity, message: action.payload.message}
        case GET_STATUS:
            return {...state, status: {
                open: state.open,
                severity: state.severity,
                message: state.message
            }}
        default:
            return state
    }
}

export const addSnackStatusAction = (payload) => ({ type: ADD_STATUS, payload})
export const getSnackStatusAction = (payload) => ({ type: GET_STATUS, payload})