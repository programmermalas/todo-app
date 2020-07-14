import * as actionTypes from "../actions/types";

const initialState = {
  todos: [],
  error: null,
};

const fetchTodosSuccess = (state, action) => {
  return { ...state, todos: action.payload };
};

const fetchTodosFailure = (state, action) => {
  return { ...state, error: action.payload.error };
};

const postTodoSuccess = (state, action) => {
  return { ...state, todos: [...state.todos, action.payload] };
};

const postTodoFailure = (state, action) => {
  return { ...state, error: action.payload.error };
};

const putTodoSuccess = (state, action) => {
  const { id, todo } = action.payload;

  const oldTodos = [...state.todos];

  const newTodos = oldTodos.map((element) => {
    if (element.id === id) {
      element.todo = todo;

      return element;
    }

    return element;
  });

  return { ...state, todos: newTodos };
};

const putTodoFailure = (state, action) => {
  return { ...state, error: action.payload.error };
};

const deleteTodoSuccess = (state, action) => {
  const oldTodos = [...state.todos];

  const newTodos = oldTodos.filter(
    (element) => element.id !== action.payload.id
  );

  return { ...state, todos: newTodos };
};

const delete_todo_failure = (state, action) => {
  return { ...state, error: action.payload.error };
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_SUCCESS:
      return fetchTodosSuccess(state, action);
    case actionTypes.FETCH_TODOS_FAILURE:
      return fetchTodosFailure(state, action);
    case actionTypes.POST_TODO_SUCCESS:
      return postTodoSuccess(state, action);
    case actionTypes.POST_TODO_FAILURE:
      return postTodoFailure(state, action);
    case actionTypes.PUT_TODO_SUCCESS:
      return putTodoSuccess(state, action);
    case actionTypes.PUT_TODO_FAILURE:
      return putTodoFailure(state, action);
    case actionTypes.DELETE_TODO_SUCCESS:
      return deleteTodoSuccess(state, action);
    case actionTypes.DELETE_TODO_FAILURE:
      return delete_todo_failure(state, action);
    default:
      return state;
  }
};

export default reducers;
