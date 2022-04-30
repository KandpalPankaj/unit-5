const init = {
    count:0
}

const INC_COUNT = "INC_COUNT"

const add = {
        type:INC_COUNT,
        payload: 1
    
}

const reducer = (store,{type,payload})=>{
    switch(type){
        case INC_COUNT:
        return {...store,count: store.count+payload}
        default: 
        return store
    }
}

class Store {
    constructor(reducer,init){
        this.reducer = reducer;
        this.store = init;
    }
    getState(){
        return this.store
    }

    dispatch(action){
        this.store = this.reducer(this.store,action)
    }
}

const store = new Store(reducer,init)
console.log(store.getState())

store.dispatch(add)
console.log(store.getState())

store.dispatch(add)
console.log(store.getState())

let a={
    
}
let b={
   
}

console.log(a==b)