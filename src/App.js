import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import * as actions from "./redux/actions";

class App extends Component {
  state = {
    todo: "",
    id: -1,
  };

  inputHandler = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (this.state.id >= 0) {
      this.props.onUpdateTodo(this.state.id, this.state.todo);
    } else {
      this.props.onAddTodo(this.state.todo);
    }

    this.setState({ todo: "", id: -1 });
  };

  editHandler = (index, todo) => {
    this.setState({ id: index, todo: todo });
  };

  deleteHandler = (todo) => {
    this.props.onDeleteTodo(todo);
  };

  render() {
    const { todo } = this.props;

    return (
      <div className="h-screen flex flex-col justify-center items-center bg-purple-100">
        <div className="w-104 shadow-lg bg-purple-400 p-3 mb-5">
          <form id="form-todo" onSubmit={this.submitHandler}>
            <input
              name="todo"
              type="text"
              className="w-full text-xl text-white text-center font-semibold placeholder-white  bg-transparent outline-none"
              placeholder="Todo Here..."
              value={this.state.todo}
              onChange={this.inputHandler}
            />
          </form>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-104 shadow-lg bg-white p-10">
            <ul className="font-semibold text-lg text-gray-700">
              {todo.todos.map((element, index) => (
                <li key={index} className="flex justify-between mb-4">
                  {element.todo}
                  <div>
                    <button
                      className="mr-2 hover:text-purple-400"
                      onClick={() => this.editHandler(index, element.todo)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>

                    <button
                      className="hover:text-purple-400"
                      onClick={() => this.deleteHandler(element.todo)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-6">
            {this.state.id >= 0 ? (
              <button
                type="submit"
                className="text-xl text-white font-semibold rounded-full shadow-lg bg-purple-400 py-3 px-10 hover:bg-purple-500"
                form="form-todo"
              >
                Edit
              </button>
            ) : (
              <button
                type="submit"
                className="text-xl text-white font-semibold rounded-full shadow-lg bg-purple-400 py-3 px-10 hover:bg-purple-500"
                form="form-todo"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => dispatch(actions.add_todo(todo)),
    onUpdateTodo: (todo, index) => dispatch(actions.update_todo(todo, index)),
    onDeleteTodo: (index) => dispatch(actions.delete_todo(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
