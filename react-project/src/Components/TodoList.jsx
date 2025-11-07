import React, { useState } from "react";
import getNextTodoId from "../utils/getNextTodoId";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewTodo] = useState("");

  const AddTodo = (e) => {
    e.preventDefault();

    const newtodoObj = { id: getNextTodoId(todos), tittle: newtodo };
    setTodos([...todos, newtodoObj]);
    setNewTodo("");
  };

  const DeleteTodo = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };
  return (
    <div className="Todo-list">
      <p className="text-[#981bf7] font-bold text-4xl mt-10 ">Todo-list app</p>
      <form onSubmit={(e) => AddTodo(e)}>
        <input
          type="text"
          placeholder="Type somthing here.."
          required
          value={newtodo}
          className="border-2 border-white font-light px-3 py-2 mt-8 rounded hover:outline-0 focus:outline-0"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="p-3 ml-10 rounded bg-white text-gray-600 hover:text-black "
          type="submit">
          Add Todo
        </button>
      </form>

      <ul className="todo-list-ul mt-10">
        {todos.map((todo) => (
          <li
            className="text-blue-50 font-medium text-xl flex items-center justify-between"
            key={todo.id}>
            {todo.tittle}{" "}
            <button
              className="bg-red-500 hover:skew-4 p-2  transition duration-700 ease-in-out rounded mt-3"
              onClick={(e) => DeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
