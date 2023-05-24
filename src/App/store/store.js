import {configureStore,combineReducers} from '@reduxjs/toolkit'
import listesReducer, { fetchAllListesValues } from './memes'
import currentReducer from './current'
export const store=configureStore({
    reducer:combineReducers({listes:listesReducer,current:currentReducer}),
    devTools:true
});
console.log('async thunk called')
store.dispatch(fetchAllListesValues());