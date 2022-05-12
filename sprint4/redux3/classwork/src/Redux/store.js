import {legacy_createStore as createStore , combineReducers,applyMiddleware} from "redux"
import {counterReducer} from "./counter/reducer";
import{todoReducer} from "./todo/reducer"
import thunk from "redux-thunk"
const rootReducer = combineReducers({
    counter:counterReducer,
    todos: todoReducer
})
// const middleware = (store)=>(next)=>(action)=>{
//     if(typeof action ==="function")
//     {
//         return action(store.dispatch)
//     }
//     next(action)
// }

// export const store = createStore(counterReducer,applyMiddleware(middleware))


export const store = createStore(rootReducer,applyMiddleware(thunk))

// store.subscribe(()=>{
//     console.log("subs", store.getState());
// })

