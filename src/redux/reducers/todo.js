import * as actionTypes from "../actions/types";

const initialState = {
  todos: [],
};

const addTodo = (state, action) => {
  const { payload } = action;

  const lastTodo = state.todos[state.todos.length - 1];

  if (lastTodo) {
    payload.id = lastTodo.id + 1;
  } else {
    payload.id = 1;
  }

  return { ...state, todos: [...state.todos, payload] };
};

const updateTodo = (state, action) => {
  const oldTodos = [...state.todos];

  const { payload } = action;

  const newTodos = oldTodos.map((element) => {
    if (element.id === payload.id) {
      element.todo = payload.todo;
      return element;
    }

    return element;
  });

  return { ...state, todos: newTodos };
};

const deleteTodo = (state, action) => {
  const oldTodos = [...state.todos];

  const { payload } = action;

  const newTodos = oldTodos.filter((element) => element.id !== payload.id);

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
