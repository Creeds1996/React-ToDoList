import TaskProgress from "./TaskProgress";

const TasksList = (props) => {
  return (
    <div className="TasksList">
      <TaskProgress
        editHandler={props.editHandler}
        deleteHandler={props.deleteHandler}
        Tasks={props.Tasks.NotStarted}
        progressName="Not Started"
      />
      <TaskProgress
        editHandler={props.editHandler}
        deleteHandler={props.deleteHandler}
        Tasks={props.Tasks.InProgress}
        progressName="In Progress"
      />
      <TaskProgress
        editHandler={props.editHandler}
        deleteHandler={props.deleteHandler}
        Tasks={props.Tasks.Completed}
        progressName="Completed"
      />
    </div>
  );
};

export default TasksList;
