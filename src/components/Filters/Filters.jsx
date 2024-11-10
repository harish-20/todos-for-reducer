import React, { useContext } from "react";
import { TODO_ACTIONS, todoContext } from "../../context/TodoContextProvider";
import { defaultColors } from "../../data/colors";

const Filters = () => {
  const { filters, dispatch } = useContext(todoContext);

  const handleStatusUpdate = (event) => {
    const { value } = event.target;
    console.log(value);

    dispatch({
      type: TODO_ACTIONS.filterStatusChange,
      payload: {
        status: value,
      },
    });
  };

  const handleColorUpdate = (event) => {
    const { value } = event.target;

    dispatch({
      type: TODO_ACTIONS.filterColorChange,
      payload: {
        color: value,
      },
    });
  };

  return (
    <div>
      <select value={filters.status} onChange={handleStatusUpdate}>
        <option value="">all</option>
        <option value="checked">checked</option>
        <option value="unchecked">unchecked</option>
      </select>
      <select value={filters.color} onChange={handleColorUpdate}>
        <option value="">all</option>
        {defaultColors.map((color) => (
          <option key={color} style={{ color }} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
