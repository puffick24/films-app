const defaultState = {
    keys: [],
}

export const KeysRemoveReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_KEY":
            return {...state, keys: [state.keys, action.payload]}
        case "REMOVE_KEY":
            return {...state, keys: state.keys.filter( key => key !== action.payload )} 
        default:
            return state
    }
}