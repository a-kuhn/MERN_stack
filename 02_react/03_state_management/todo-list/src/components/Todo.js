import React, { useState } from "react";

const Todo = props => {
  const [inputState, setInputState] = useState({
    task: "",
    isCompleted: false
  });

  const [tasksState, setTasksState] = useState([]);

  const toggleIsCompleted = i => {
    tasksState[i].isCompleted = !tasksState[i].isCompleted;
    setTasksState([...tasksState]);
  };

  const onSubmitHandler = e => {
    setTasksState([...tasksState, inputState]);
    setInputState({ task: "", isCompleted: false });
  };

  const deleteTask = idx => {
    const newList = tasksState.filter((task, i) => i !== idx);
    setTasksState(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* map over todo list */}
      {/* conditionally render: strikethrough on completed items */}
      {tasksState.map((task, i) => {
        return (
          <div key={i}>
            <span className={task.isCompleted ? "line-through" : ""}>
              {task.task}{" "}
            </span>
            <input
              name="isCompleted"
              type="checkbox"
              onChange={() => {
                toggleIsCompleted(i);
              }}
            />
            <button
              onClick={() => {
                deleteTask(i);
              }}
              className="btn btn-outline-secondary"
            >
              Remove
            </button>
          </div>
        );
      })}
      {/* add item to list form */}
      <div>
        <label className="mx-2 my-4">New Task: </label>
        <input
          type="text"
          name="task"
          value={inputState.task}
          onChange={e => {
            setInputState({
              ...inputState,
              [e.target.name]: e.target.value
            });
          }}
          className="btn-light btn-outline-secondary"
        />
        <div
          name="add-btn"
          onClick={onSubmitHandler}
          className="btn btn-sm btn-outline-secondary mx-2 my-4 px-3"
        >
          Add
        </div>
      </div>
    </div>
  );
};

export default Todo;
