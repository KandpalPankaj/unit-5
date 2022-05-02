

import {LOGIN , ADMIN ,USER} from "./actions"

const init = {login:false,admin:[] , user:""};



export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case LOGIN :
            return {...store, login : payload}
    case ADMIN :{
      return {...store, admin:payload}
    }
    case USER :{
      return {...store , user : payload}
    }
    default:
      return store;
  }
};