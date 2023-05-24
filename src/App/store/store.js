import { createStore, combineReducers } from "redux"

export const storeInitialState = { content: '', isShown: false }

const reducer = (state = storeInitialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'modal/show':
            return { ...state, content: action.payload, isShown: true }
        case 'modal/hide':
            return { ...state, content: '', isShown: false }
        default:
            return state
    }
}
export const store=createStore(combineReducers({modal:reducer,modal2:reducer}));
store.subscribe(()=>{console.log(store.getState())});

store.dispatch(showModal('coucou'))
store.dispatch({type:'modal/hide'})

export function showModal(content){
    return {type:'modal/show',payload:content}
}