import { LOGIN } from "./action";
const init = {login:{}}
export const loginReducer = (store=init,{type , payload})=>{
    switch(type){
        
        case LOGIN :
            return {...store, login : payload}
        default: return store
    }
    
}