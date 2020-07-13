import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import * as actions from "./redux/actions";

import Input from "./components/Input";

const App = () => {
  // create state
  const [state, setState] = useState({
    todo: "",
    id: -1,
  });

  // get global state
  const todo = useSelector((state) => state.todo);

  // create dispatch
  const dispatch = useDispatch();

  // create input handler
  const inputHandler = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  // create submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    // if id not 0 update todo else create todo
    if (state.id >= 0) {
      dispatch(actions.update_todo(state.id, state.todo));
    } else {
      dispatch(actions.add_todo(state.todo));
    }

    // reset state
    setState({ todo: "", id: -1 });
  };

  // create edit handler
  const editHandler = (id, todo) => {
    setState({ id: id, todo: todo });
  };

  // create cancel handler
  const cancelHandler = () => {
    setState({ id: -1, todo: "" });
  };

  // create delete handler
  const deleteHandler = (id) => {
    dispatch(actions.delete_todo(id));
  };

  // create lists
  const lists = todo.todos.map((element) => (
    <li key={element.id} className="flex justify-between mb-4">
      {element.todo}
      <div>
        <button
          className="mr-2 hover:text-purple-400"
          onClick={() => editHandler(element.id, element.todo)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>

        <button
          className="hover:text-purple-400"
          onClick={() => deleteHandler(element.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </li>
  ));

  // create button
  const button =
    state.id >= 0 ? (
      <React.Fragment>
        <button
          type="submit"
          className="text-xl text-white font-semibold rounded-full shadow-lg bg-purple-400 py-3 px-10 mr-2 hover:bg-purple-500"
          form="form-todo"
        >
          Edit
        </button>

        <button
          className="text-xl text-white font-semibold rounded-full shadow-lg bg-purple-400 py-3 px-10 hover:bg-purple-500"
          onClick={cancelHandler}
        >
          Cancel
        </button>
      </React.Fragment>
    ) : (
      <button
        type="submit"
        className="text-xl text-white font-semibold rounded-full shadow-lg bg-purple-400 py-3 px-10 hover:bg-purple-500"
        form="form-todo"
      >
        Save
      </button>
    );

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-purple-100">
      <Input
        todo={state.todo}
        onInputHandler={inputHandler}
        onSubmitHandler={submitHandler}
      />

      <div className="flex flex-col items-center">
        <div className="w-104 shadow-lg bg-white p-10">
          <ul className="font-semibold text-lg text-gray-700">{lists}</ul>
        </div>

        <div className="-mt-6">{button}</div>
      </div>
    </div>
  );
};

export default App;
