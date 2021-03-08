import "./ProgressSelect.css";

const ProgressSelect = (props) => {
  return (
    <div className="Select">
      <label>{props.Name}: </label>
      <select value={props.Value} onChange={props.onChange}>
        <option value="NotStarted">Not Started</option>
        <option value="InProgress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default ProgressSelect;
