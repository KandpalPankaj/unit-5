import { legacy_createStore as createStore } from "redux";

const ADD_COUNT = "ADD_COUNT"
const ADD_TODO = "ADD_TODO"
const reducer = (store, action) => {
  switch (action.type) {
    case  ADD_COUNT:
      return { ...store, counter: store.counter + action.payload };
    case ADD_TODO :
      return { ...store, todos: [...store.todos, action.payload] };
    default:
      return store;
  }
};

const initState = {
  counter: 0,
  todos: [],
};

const store = createStore(reducer, initState);

console.log("Store", store.getState());
store.dispatch({ type: ADD_COUNT, payload: 1 });
store.dispatch({
  type: ADD_TODO,
  payload: { todo: "learn react", status: "false" },
});
store.dispatch({
  type: ADD_TODO,
  payload: { todo: "learn vue", status: "false" },
});
console.log("after", store.getState());
