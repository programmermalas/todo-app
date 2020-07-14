import axios from "axios";
import * as actionTypes from "./types";

const fetchTodoRequest = () => {
  return {
    type: actionTypes.FETCH_TODOS_REQUEST,
  };
};

const fetchTodosSuccess = (todos) => {
  return {
    type: actionTypes.FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

const fetchTodosFailure = (error) => {
  return {
    type: actionTypes.FETCH_TODOS_FAILURE,
    payload: { error: error },
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodoRequest());

    axios
      .get("api/todos")
      .then((response) => {
        dispatch(fetchTodosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchTodosFailure(error));
      });
  };
};

const postTodoRequest = () => {
  return {
    type: actionTypes.POST_TODO_REQUEST,
  };
};

const postTodoSuccess = (data) => {
  return {
    type: actionTypes.POST_TODO_SUCCESS,
    payload: {
      id: data.id,
      todo: data.todo,
    },
  };
};

const postTodoFailure = (error) => {
  return {
    type: actionTypes.POST_TODO_FAILURE,
    payload: { error: error },
  };
};

export const postTodo = (todo) => {
  return (dispatch) => {
    dispatch(postTodoRequest());

    axios
      .post("api/todo", {
        todo: todo,
      })
      .then((response) => {
        dispatch(postTodoSuccess(response.data));
      })
      .catch((error) => {
        dispatch(postTodoFailure(error));
      });
  };
};

const putTodoRequest = () => {
  return {
    type: actionTypes.PUT_TODO_REQUEST,
  };
};

const putTodoSuccess = (data) => {
  return {
    type: actionTypes.PUT_TODO_SUCCESS,
    payload: {
      id: data.id,
      todo: data.todo,
    },
  };
};

const putTodoFailure = (error) => {
  return {
    type: actionTypes.PUT_TODO_FAILURE,
    payload: {
      error: error,
    },
  };
};

export const putTodo = (id, todo) => {
  return (dispatch) => {
    dispatch(putTodoRequest());

    axios
      .put(`api/todo/${id}`, {
        todo: todo,
      })
      .then((response) => {
        dispatch(putTodoSuccess(response.data));
      })
      .catch((error) => {
        dispatch(putTodoFailure(error));
      });
  };
};

const deleteTodoRequest = () => {
  return {
    type: actionTypes.DELETE_TODO_REQUEST,
  };
};

const deleteTodoSuccess = (id) => {
  return {
    type: actionTypes.DELETE_TODO_SUCCESS,
    payload: {
      id: id,
    },
  };
};

const deleteTodoFailure = (error) => {
  return {
    type: actionTypes.DELETE_TODO_FAILURE,
    payload: {
      error: error,
    },
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(deleteTodoRequest());

    axios
      .delete(`api/todo/${id}`)
      .then((response) => {
        dispatch(deleteTodoSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteTodoFailure(error));
      });
  };
};
