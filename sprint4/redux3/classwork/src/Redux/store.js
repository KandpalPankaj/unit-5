import {legacy_createStore as createStore , combineReducers} from "redux"
import {counterReducer} from "./counter/reducer";
import{todoReducer} from "./todo/reducer"
const rootReducer = combineReducers({
    counter:counterReducer,
    todos: todoReducer
})
export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(()=>{
//     console.log("subs", store.getState());
// })

