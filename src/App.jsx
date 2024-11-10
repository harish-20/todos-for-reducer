import React from "react";
import Filters from "./components/Filters/Filters";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div>
      <h2>Todo app</h2>

      <Filters />

      <TodoList />
    </div>
  );
};

export default App;
