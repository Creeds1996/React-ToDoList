import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import ProgressSelect from "./ProgressSelect";
import "./Task.css";

const Task = (props) => {
  const [deleteTask, setDeleteTask] = useState(false);
  const [editTask, setEditTask] = useState({
    editingTask: false,
    input: props.taskName,
    progress: props.Progress,
  });

  const onInputChange = (event) => {
    setEditTask({
      ...editTask,
      input: event.target.value,
    });
  };

  const onProgressChange = (event) => {
    setEditTask({ ...editTask, progress: event.target.value });
  };

  return (
    <div className="Task">
      {deleteTask ? (
        <Modal onClose={() => setDeleteTask(false)}>
          <h2>Delete Task</h2>
          <p>{`Are you sure you wish to delete "${props.taskName}"?`}</p>
          <div className="Modal-Buttons">
            <button
              onClick={() => {
                setDeleteTask(false);
                props.deleteHandler();
              }}
            >
              YES
            </button>
            <button onClick={() => setDeleteTask(false)}>NO</button>
          </div>
        </Modal>
      ) : null}
      {editTask.editingTask ? (
        <Modal onClose={() => setEditTask({ ...editTask, editingTask: false })}>
          <h2>Edit Task</h2>
          <p>{`You are now editing: "${props.taskName}"`}</p>
          <Input
            Id="TaskName"
            Name="Task Name"
            onChange={onInputChange}
            value={editTask.input}
          />
          <ProgressSelect
            Value={editTask.progress}
            Name="Updated Progress"
            onChange={onProgressChange}
          />
          <div className="Modal-Buttons">
            <button
              disabled={editTask.input.trim() === ""}
              onClick={() => {
                props.editHandler(
                  editTask.input,
                  props.Index,
                  editTask.progress
                );
                setEditTask({
                  ...setEditTask,
                  editingTask: false,
                });
              }}
            >
              Edit
            </button>
            <button
              onClick={() => setEditTask({ ...editTask, editingTask: false })}
            >
              Cancel
            </button>
          </div>
        </Modal>
      ) : null}
      <h3>{props.taskName}</h3>
      <div className="Buttons">
        <button
          onClick={() =>
            setEditTask({
              ...editTask,
              editingTask: true,
              input: props.taskName,
              progress: props.Progress,
            })
          }
        >
          Edit
        </button>
        <button onClick={() => setDeleteTask(true)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
