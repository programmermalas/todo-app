import * as actionTypes from "./types";

export const add_todo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      todo: todo,
    },
  };
};

export const update_todo = (id, todo) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: {
      id: id,
      todo: todo,
    },
  };
};

export const delete_todo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: {
      id: id,
    },
  };
};
