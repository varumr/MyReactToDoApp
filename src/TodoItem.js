
//trying to create a Component for ToDo Items - to  maintain better state

import React from "react";

const TodoItem = ({ text, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={text}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {text}
    </label>
  </div>
);

export default TodoItem;
