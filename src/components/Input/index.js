import React from "react";

const Input = ({ todo, onInputHandler, onSubmitHandler }) => {
  return (
    <div className="w-104 shadow-lg bg-purple-400 p-3 mb-5">
      <form id="form-todo" onSubmit={onSubmitHandler}>
        <input
          name="todo"
          type="text"
          className="w-full text-xl text-white text-center font-semibold placeholder-white  bg-transparent outline-none"
          placeholder="Todo Here..."
          value={todo}
          onChange={onInputHandler}
        />
      </form>
    </div>
  );
};

export default Input;
