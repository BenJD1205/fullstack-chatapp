import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import appReducer from './slices/app';

///slices
const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    //whiteList:[],
    //blackList:[],
}

const rootReducer = combineReducers({
    app:appReducer,
})

export {rootPersistConfig, rootReducer}