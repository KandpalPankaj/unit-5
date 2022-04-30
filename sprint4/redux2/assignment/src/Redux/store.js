import {legacy_createStore as createStore} from "redux"
import {counterReducer} from "./reducer";

export const store = createStore(counterReducer,{todos:[]})

// store.subscribe(()=>{
//     console.log("subs", store.getState());
// })


