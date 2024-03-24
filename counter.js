// app.js
import "./styles.css";

import React, { useContext } from "react";

const CounterContext = React.createContext();

function CounterProvider({ children }) {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

function Counter() {
  const { count, increment, decrement } = React.useContext(CounterContext);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
// Create a simple counter application
//  using React and useContext.
//  The application should display
//  a counter and two buttons, one
//  to increment the counter and one to decrement it. The counter value should be stored in a context object, and the buttons should use the useContext hook to access and update the counter value.


// indexe.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
