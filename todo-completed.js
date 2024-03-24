import React, { useReducer, useState } from "react";
import "./styles.css";

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    // TODO: implement ADD_TODO case
    case "ADD_TODO":
      return [...state, action.payload];
    // TODO: implement TOGGLE_TODO case
    case "TOGGLE_TODO":
      const newTodos = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: true };
        } else return todo;
      });
      return newTodos;
    // TODO: implement CLEAR_COMPLETED case
    case "CLEAR_COMPLETED":
      const filteredTodos = state.filter((todo) => !todo.isCompleted);
      return filteredTodos;
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo.trim()) {
      // TODO: dispatch action to add new todo
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Date.now(),
          text: newTodo,
          isCompleted: false,
        },
      });
      setNewTodo("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            className={todo.isCompleted ? "completed" : ""}
            key={todo.id}
            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </div>
  );
}

export default App;




// // css?
// .App {
//     font-family: sans-serif;
//     text-align: center;
//   }
//   .completed {
//     text-decoration: line-through;
//   }
  