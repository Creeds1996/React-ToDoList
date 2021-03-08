import "./Input.css";

const Input = (props) => {
  return (
    <div className="Input">
      <label htmlFor={props.Id}>{props.Name}: </label>
      <input
        value={props.value || ""}
        onChange={props.onChange}
        id={props.Id}
      />
    </div>
  );
};

export default Input;
