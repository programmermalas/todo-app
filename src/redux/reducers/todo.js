import * as actionTypes from "../actions/types";

const initialState = {
  todos: [],
};

const addTodo = (state, action) => {
  return { ...state, todos: [...state.todos, action.payload] };
};

const updateTodo = (state, action) => {
  const newTodos = [...state.todos];

  newTodos[action.payload.id] = { todo: action.payload.todo };

  return { ...state, todos: newTodos };
};

const deleteTodo = (state, action) => {
  const oldTodos = [...state.todos];
  const newTodos = oldTodos.filter(
    (element) => element.todo !== action.payload
  );
  return { ...state, todos: newTodos };
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return addTodo(state, action);
    case actionTypes.UPDATE_TODO:
      return updateTodo(state, action);
    case actionTypes.DELETE_TODO:
      return deleteTodo(state, action);
    default:
      return state;
  }
};

export default reducers;
