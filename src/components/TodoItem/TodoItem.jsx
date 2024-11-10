import React, { useContext } from "react";

import { defaultColors } from "../../data/colors";
import { TODO_ACTIONS, todoContext } from "../../context/TodoContextProvider";

import "./TodoItem.css";

const TodoItem = (props) => {
  const { dispatch } = useContext(todoContext);

  const handleToggleComplete = () => {
    dispatch({
      type: TODO_ACTIONS.toggleComplete,
      payload: {
        id: props.todo.id,
      },
    });
  };

  const handleColorChange = (event) => {
    dispatch({
      type: TODO_ACTIONS.colorChange,
      payload: {
        id: props.todo.id,
        color: event.target.value,
      },
    });
  };

  const handleDelete = () => {
    console.log(props.todo.id);
    dispatch({
      type: TODO_ACTIONS.removeTodo,
      payload: {
        id: props.todo.id,
      },
    });
  };

  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={props.todo.isDone}
          onClick={handleToggleComplete}
        />
        {props.todo.title}
      </div>

      <div>
        <select onChange={handleColorChange} value={props.todo.color}>
          {defaultColors.map((color) => (
            <option style={{ color }} key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div style={{ cursor: "pointer" }} onClick={handleDelete}>
        X
      </div>
    </div>
  );
};

export default TodoItem;
