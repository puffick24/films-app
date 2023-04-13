const defaultState = {
    keys: [],
}

const ADD_KEY = 'ADD_KEY'
const REMOVE_KEY = 'REMOVE_KEY'


export const KeysRemoveReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_KEY:
            return {...state, keys: [...state.keys, action.payload]}
        case REMOVE_KEY:
            return {...state, keys: state.keys.filter( key => key !== action.payload )} 
        default:
            return state
    }
}

export const addKeyAction = (payload) => ({ type: ADD_KEY, payload})
export const removeKeyAction = (payload) => ({ type: REMOVE_KEY, payload})