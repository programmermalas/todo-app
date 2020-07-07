import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-purple-100">
      <div className="w-104 shadow-lg bg-purple-400 p-3 mb-5">
        <form>
          <input
            type="text"
            className="w-full text-xl text-white text-center font-semibold placeholder-white  bg-transparent outline-none"
            placeholder="Todo Here..."
          />
        </form>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-104 shadow-lg bg-white p-10">
          <ul className="font-semibold text-lg text-gray-700">
            <li className="flex justify-between mb-4 hover:text-purple-400">List 1 <FontAwesomeIcon icon={faTrashAlt} /></li>
          </ul>
        </div>

        <div className="-mt-6">
          <button className="text-xl text-white font-semibold rounded-full shadow-lg bg-purple-400 py-3 px-10 hover:bg-purple-500">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
