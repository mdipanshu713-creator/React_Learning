import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        📝 Todo App
      </h2>

      <form onSubmit={addTodoHandler} className="flex gap-3">
        <input
          type="text"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg font-semibold transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;