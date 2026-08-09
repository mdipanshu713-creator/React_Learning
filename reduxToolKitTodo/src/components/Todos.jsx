import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        📋 My Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500">
          No todos yet. Add your first task! 🚀
        </p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <span className="text-lg text-gray-800 break-words">
                {todo.text}
              </span>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;