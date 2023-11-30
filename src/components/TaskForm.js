import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const TaskForm = (prop) => {
  const [inputName, setName] = useState("");
  const name = useRef("");
  const description = useRef("");
  const priority = useRef("");
  const [isTouched, setIsTouched] = useState(false);
  const navigate = useNavigate();

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const addNewTaskHandler = (event) => {
    event.preventDefault();
    if (prop.taskList.length !== 0) {
      prop.onEditTask({
        id: prop.taskList.id,
        name: name.current.value,
        description: description.current.value,
        level: priority.current.value,
      });
    } else {
      prop.onAddTask({
        id: Math.random(),
        name: name.current.value,
        description: description.current.value,
        level: priority.current.value,
      });
    }
    navigate("/");
  };
  return (
    <form onSubmit={addNewTaskHandler}>
      <div className="mb-3">
        <label htmlFor="taskname" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="taskname"
          placeholder="Task Name"
          defaultValue={prop.taskList.name || ""}
          onChange={nameHandler}
          ref={name}
          onBlur={() => setIsTouched(true)}
        />
      </div>
      {inputName === "" && isTouched && (
        <p className="text-danger">Name cannot be empty!</p>
      )}
      <div className="mb-3">
        <label htmlFor="taskdescription" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="taskdescription"
          rows="3"
          defaultValue={prop.taskList.description || ""}
          ref={description}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="taskpriority" className="form-label">
          Priority
        </label>
        <select
          className="form-select"
          style={{ cursor: "pointer" }}
          name="priority"
          id="taskpriority"
          ref={priority}
          defaultValue={prop.taskList.level || ""}
        >
          <option name="priority" value="low">
            Low
          </option>
          <option name="priority" value="medium">
            Medium
          </option>
          <option name="priority" value="high">
            High
          </option>
        </select>
      </div>
      <div className="d-flex justify-content-evenly">
        <button
          type="submit"
          className="btn btn-primary "
          disabled={inputName === "" && prop.taskList.length === 0}
        >
          ADD
        </button>
        <Link to={"/"}>
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
};

export default TaskForm;
