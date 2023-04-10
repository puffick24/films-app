import { createStore, combineReducers } from 'redux'
import {KeysRemoveReducer} from './KeysRemovingReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    keysRemove: KeysRemoveReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())