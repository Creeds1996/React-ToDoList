import { useState } from "react";
import TasksList from "../Components/TasksList";
import AddTaskButton from "../Components/AddTaskButton";
import Modal from "../Components/Modal";
import Input from "../Components/Input";
import ProgressSelect from "../Components/ProgressSelect";
import useToDoHook from "../Hooks/ToDoListHook";
import "./ToDoList.css";

const ToDoList = (props) => {
  const [
    ToDoData,
    addTaskHandler,
    deleteTaskHandler,
    editTaskHandler,
  ] = useToDoHook();

  const [addTask, setAddTask] = useState(false);
  const [userInput, setUserInput] = useState({
    taskName: "",
    progress: "NotStarted",
  });

  const toggleAddTask = () => {
    setAddTask(!addTask);
  };

  const closeModalHandler = () => {
    setAddTask(false);
    setUserInput({ ...userInput, taskName: "", progress: "NotStarted" });
  };

  const onChangeHandler = (event) => {
    setUserInput({ ...userInput, taskName: event.target.value });
  };

  const progressChangeHandler = (event) => {
    setUserInput({ ...userInput, progress: event.target.value });
  };

  const onAddTaskHandler = () => {
    closeModalHandler();
    addTaskHandler(userInput.taskName, userInput.progress);
  };

  return (
    <div className="ToDoList">
      <h1>To Do List</h1>
      {addTask && (
        <Modal onClose={closeModalHandler}>
          <h2>Add New Task</h2>
          <Input
            value={userInput.taskName}
            onChange={onChangeHandler}
            Name="Task Name"
            Id="TaskName"
          />
          <ProgressSelect
            onChange={progressChangeHandler}
            Name="Task progress"
          />
          <button
            disabled={userInput.taskName.trim() === ""}
            onClick={() => {
              if (userInput.taskName.trim() !== "") {
                onAddTaskHandler();
              }
            }}
          >
            Add Task
          </button>
        </Modal>
      )}
      <div className="Controls">
        <AddTaskButton onClick={toggleAddTask} />
      </div>
      <TasksList
        editHandler={editTaskHandler}
        deleteHandler={deleteTaskHandler}
        Tasks={ToDoData}
      />
    </div>
  );
};

export default ToDoList;
