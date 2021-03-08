import Task from "./Task";
import "./TaskProgress.css";

const TaskProgress = (props) => {
  const onEditHandler = (newTaskName, index, updatedProgress) => {
    props.editHandler(
      props.progressName.replace(/ /g, ""),
      index,
      updatedProgress,
      newTaskName
    );
  };

  return (
    <div className="TaskProgress">
      <h3>{props.progressName}</h3>
      <ul>
        {props.Tasks && props.Tasks.length > 0 ? (
          props.Tasks.map((task, index) => {
            return (
              <li key={task + index}>
                <Task
                  Progress={props.progressName.replace(/ /g, "")}
                  Index={index}
                  editHandler={onEditHandler}
                  deleteHandler={() =>
                    props.deleteHandler(
                      index,
                      props.progressName.replace(/ /g, "")
                    )
                  }
                  taskName={task.TaskName}
                />
              </li>
            );
          })
        ) : (
          <li>No tasks.</li>
        )}
      </ul>
    </div>
  );
};

export default TaskProgress;
