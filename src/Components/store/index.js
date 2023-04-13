import { createStore, combineReducers } from 'redux'
import {KeysRemoveReducer} from './KeysRemovingReducer'
import {SnackbarReducer} from './SnackbarReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    keysRemove: KeysRemoveReducer,
    snackbars: SnackbarReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())