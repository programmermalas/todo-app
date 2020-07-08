import * as actionTypes from "./types";

export const add_todo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      todo: todo,
    },
  };
};

export const update_todo = (index, todo) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: {
      id: index,
      todo: todo,
    },
  };
};

export const delete_todo = (todo) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: todo,
  };
};
