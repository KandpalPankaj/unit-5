import {legacy_createStore as createStore} from "redux"
import {counterReducer} from "./reducer";


export const store = createStore(counterReducer,{counter:0 , todos:[]})

// const middleware = (store)=>(next)=>(action)=>{
//     if(typeof action ==="function")
//     {
//         return action(store.dispatch)
//     }
//     next(action)
// }

// export const store = createStore(counterReducer,applyMiddleware(middleware))


store.subscribe(()=>{
    console.log("subs", store.getState());
})

