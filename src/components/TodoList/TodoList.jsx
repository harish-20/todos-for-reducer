import React, { useContext, useState } from "react";

import TodoItem from "../TodoItem/TodoItem";

import { TODO_ACTIONS, todoContext } from "../../context/TodoContextProvider";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const { todos, filters, dispatch } = useContext(todoContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setNewTodo(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: TODO_ACTIONS.addTodo,
      payload: {
        title: newTodo,
      },
    });
    setNewTodo("");
  };

  const filteredTodos = todos.filter((todo) => {
    let isValid = true;
    if (filters.color) {
      isValid = filters.color === todo.color;
    }

    if (filters.status) {
      if (filters.status === "checked" && isValid) isValid = todo.isDone;
      if (filters.status === "unchecked" && isValid) isValid = !todo.isDone;
    }

    return isValid;
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} />
      </form>
      <div className="">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
