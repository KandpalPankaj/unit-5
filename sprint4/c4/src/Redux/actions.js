// action types

// Action Creators
export const LOGIN = "LOGIN";
export const ADMIN = "ADMIN";
export const USER = "USER"
export const logIn = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const admin = (data) => {
  return {
    type: ADMIN,
    payload: data,
  };
};

export const user = (data)=>{
  return{  type: USER,
    payload: data
  }
}
