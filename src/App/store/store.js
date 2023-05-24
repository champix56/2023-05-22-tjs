import {configureStore,combineReducers} from '@reduxjs/toolkit'
import listesReducer, { fetchAllListesValues } from './memes'
export const store=configureStore({
    reducer:combineReducers({listes:listesReducer}),
    devTools:true
});
console.log('async thunk called')
store.dispatch(fetchAllListesValues());