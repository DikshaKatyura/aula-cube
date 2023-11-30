import { Link } from "react-router-dom";
import classes from "./TaskItem.module.css";
import { useState } from "react";
import EmptyTaskList from "./EmptyTasksList";

const Completed = <p className="text-success">Completed</p>;
const NotCompleted = <p className="text-danger">Not Completed</p>;

const TaskItem = (prop) => {
  const [isChecked, setIsChecked] = useState(
    new Array(prop.tasks.length).fill(false)
  );

  const isCompletedHandler = (position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
  };

  return (
    <>
      {!prop.tasks.length && <EmptyTaskList />}
      {prop.tasks.length > 0 && (
        <div className={` ${classes.taskItem}`}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {prop.tasks.map((ele, index) => {
                return (
                  <tr key={ele.id} className="">
                    <td>
                      <div className="form-check d-flex gap-3">
                        <input
                          className="form-check-input"
                          style={{ cursor: "pointer" }}
                          type="checkbox"
                          value={isChecked[index]}
                          name={"isCompleted"}
                          id={`complete-${index}`}
                          onChange={() => isCompletedHandler(index)}
                        />
                        <label
                          htmlFor={`complete-${index}`}
                          className={isChecked[index] ? `${classes.mark}` : ""}
                        >
                          {ele.name}
                        </label>
                      </div>
                    </td>
                    <td>{isChecked[index] ? Completed : NotCompleted}</td>
                    <td>
                      <p
                        className={
                          ele.level === "high"
                            ? "text-danger"
                            : ele.level === "low"
                            ? "text-success"
                            : "text-info"
                        }
                      >
                        {ele.level}
                      </p>
                    </td>
                    <td>
                      <Link to={`${ele.id}`}>
                        <button className="btn btn-warning">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TaskItem;
