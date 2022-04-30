import {legacy_createStore as createStore , combineReducers} from "redux"
import {loginReducer} from "./login/reducer";
import {todoReducer} from './todo/reducer'
const rootReducer = combineReducers({
    login:loginReducer,
    todos: todoReducer
})
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(()=>{
//     console.log("subs", store.getState());
// })


