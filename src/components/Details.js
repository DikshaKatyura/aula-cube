import { Link, useNavigate } from "react-router-dom";
import classes from "./Details.module.css";

const Details = (props) => {
  const navigate = useNavigate();
  const onRemoveTask = () => {
    props.removeTask(props.item.id);
    navigate("/");
  };
  return (
    <>
      <h1 className="text-center mt-5">Details</h1>
      <div className={`card ${classes.details}`}>
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
        <p>
          <strong>Priority :</strong> {props.item.level}
        </p>
        <div className={classes["btns-group"]}>
          <Link to={`/${props.item.id}/edit`} rel="relative">
            <button type="button" className="btn btn-primary">
              Edit
            </button>
          </Link>
          <button
            className="btn btn-danger"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#confirmModal"
          >
            Delete
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="confirmModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Are you sure?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={onRemoveTask}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
